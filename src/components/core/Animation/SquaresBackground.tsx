import { useEffect, useRef } from 'react';

import { cn } from 'src/lib/utils';

type HoveredSquare = { x: number; y: number };

const Squares = ({
  direction = 'right',
  speed = 1,
  borderColor = '#999',
  squareSize = 40,
  hoverFillColor = '#222',
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const numSquaresX = useRef(0);
  const numSquaresY = useRef(0);
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquareRef = useRef<HoveredSquare | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasElement = canvas as HTMLCanvasElement;
    const ctx = canvasElement.getContext('2d');

    const resizeCanvas = () => {
      canvasElement.width = canvasElement.offsetWidth;
      canvasElement.height = canvasElement.offsetHeight;
      numSquaresX.current = Math.ceil(canvasElement.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvasElement.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      for (
        let x = startX;
        x < canvasElement.width + squareSize;
        x += squareSize
      ) {
        for (
          let y = startY;
          y < canvasElement.height + squareSize;
          y += squareSize
        ) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);

          if (
            hoveredSquareRef.current &&
            Math.floor((x - startX) / squareSize) ===
              (hoveredSquareRef.current as HoveredSquare).x &&
            Math.floor((y - startY) / squareSize) ===
              (hoveredSquareRef.current as HoveredSquare).y
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      const gradient = ctx.createRadialGradient(
        canvasElement.width / 2,
        canvasElement.height / 2,
        0,
        canvasElement.width / 2,
        canvasElement.height / 2,
        Math.sqrt(canvasElement.width ** 2 + canvasElement.height ** 2) / 2,
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(1, '#060606');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      switch (direction) {
        case 'right':
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'left':
          gridOffset.current.x =
            (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'up':
          gridOffset.current.y =
            (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'down':
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'diagonal':
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        default:
          break;
      }
      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect() ?? {
        left: 0,
        top: 0,
      };
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      const hoveredSquareX = Math.floor(
        (mouseX + gridOffset.current.x - startX) / squareSize,
      );
      const hoveredSquareY = Math.floor(
        (mouseY + gridOffset.current.y - startY) / squareSize,
      );

      if (
        !hoveredSquareRef.current ||
        hoveredSquareRef.current.x !== hoveredSquareX ||
        hoveredSquareRef.current.y !== hoveredSquareY
      ) {
        hoveredSquareRef.current = { x: hoveredSquareX, y: hoveredSquareY };
      }
    };

    const handleMouseLeave = () => {
      hoveredSquareRef.current = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('w-full h-full border-none block', className)}
    ></canvas>
  );
};

export default Squares;
