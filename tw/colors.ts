import plugin from 'tailwindcss/plugin';
import hexRgb from 'hex-to-rgb';

const hexToRgb = (hex: string) => {
  const [r, g, b] = hexRgb(hex);
  return `${r} ${g} ${b}`;
};

const colorToVar = (color = {}, nextKey = '') => {
  let result = {};

  Object.entries(color).forEach(([key, value = '']) => {
    const newKey = nextKey
      ? key === 'DEFAULT'
        ? `${nextKey}`
        : `${nextKey}-${key}`
      : key;

    if (typeof value === 'object') {
      result = {
        ...result,
        ...colorToVar(value as object, newKey),
      };
    } else {
      result[`--${newKey}`] = hexToRgb(value as string);
    }
  });

  return result;
};

const colorToTheme = (color = {}, nextKey = '') => {
  const result = {};

  Object.entries(color).forEach(([key, value = '']) => {
    const newKey = nextKey
      ? key === 'DEFAULT'
        ? `${nextKey}`
        : `${nextKey}-${key}`
      : key;

    if (typeof value === 'object') {
      result[key] = colorToTheme(value as object, newKey);
    } else {
      result[key] = `rgb(var(--${newKey}) / <alpha-value>)`;
    }
  });

  return result;
};

export const colorPlugin = plugin.withOptions(
  function (options = {}) {
    return function ({ addBase }) {
      addBase({
        ':root': colorToVar(options as object),
      });
    };
  },
  function (options = {}) {
    return {
      theme: {
        extend: {
          colors: colorToTheme(options as object),
        },
      },
    };
  },
);
