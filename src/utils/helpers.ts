import dayjs from 'src/lib/dayjs';

export const formatNumber = (num: number): string => {
  if (num < 1000) return num.toString();
  return (num / 1000).toFixed(1) + 'k';
};

export const timeAgo = (date: string | Date): string => {
  return dayjs(date).fromNow();
};
