"use client";

import { useEffect, useRef } from "react";

export function AmazonVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Amazon-specific intelligence symbols
    // Stars, Cart, UpArrow, Box, BuyBox(B), Prime(P)
    const symbols = ["★", "🛒", "📈", "📦", "B", "P", "⚡", "✓"];
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radius = Math.min(rect.width, rect.height) * 0.45;

      ctx.font = "bold 14px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const points: {
        x: number;
        y: number;
        z: number;
        char: string;
        color: string;
        scale: number;
      }[] = [];

      // Generate a dynamic "Growth Matrix"
      // We'll create a layered sphere effect representing account health and marketplace connectivity
      for (let phi = 0; phi < Math.PI * 2; phi += 0.25) {
        for (let theta = 0; theta < Math.PI; theta += 0.25) {
          // Add some "A10 Algorithm" flux
          const x = Math.sin(theta) * Math.cos(phi + time * 0.3);
          const y = Math.sin(theta) * Math.sin(phi + time * 0.3);
          const z = Math.cos(theta);

          // Rotate around axes for premium motion
          const rotY = time * 0.2;
          const newX = x * Math.cos(rotY) - z * Math.sin(rotY);
          const newZ = x * Math.sin(rotY) + z * Math.cos(rotY);

          const rotX = time * 0.1;
          const newY = y * Math.cos(rotX) - newZ * Math.sin(rotX);
          const finalZ = y * Math.sin(rotX) + newZ * Math.cos(rotX);

          const depth = (finalZ + 1) / 2;
          const symbolIndex = Math.floor(depth * (symbols.length - 1));

          // Emerald Green with hints of Amazon Amber/Orange (#FF9900)
          let color;
          if (finalZ > 0.8) {
            // Front-most items get a bit of "Amazon Golden" glow
            color = `rgba(255, ${Math.floor(153 + depth * 50)}, 0, ${0.4 + depth * 0.6})`;
          } else {
            // Background items are Brand Emerald
            color = `rgba(0, ${Math.floor(103 + depth * 100)}, ${Math.floor(79 + depth * 50)}, ${0.1 + depth * 0.4})`;
          }

          points.push({
            x: centerX + newX * radius,
            y: centerY + newY * radius,
            z: finalZ,
            char: symbols[symbolIndex],
            color,
            scale: 0.7 + (finalZ + 1) * 0.5,
          });
        }
      }

      // Sort by depth
      points.sort((a, b) => a.z - b.z);

      // Draw Connection Lines (The "Research" web)
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 103, 79, 0.05)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < points.length; i += 10) {
        if (points[i].z > 0) {
          ctx.moveTo(points[i].x, points[i].y);
          const next = (i + 15) % points.length;
          ctx.lineTo(points[next].x, points[next].y);
        }
      }
      ctx.stroke();

      // Draw Points (Amazon symbols)
      points.forEach((point) => {
        ctx.fillStyle = point.color;
        ctx.font = `bold ${10 * point.scale}px sans-serif`;
        ctx.fillText(point.char, point.x, point.y);

        // Add a subtle glow to front-most items
        if (point.z > 0.9) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = point.color;
          ctx.fillText(point.char, point.x, point.y);
          ctx.shadowBlur = 0;
        }
      });

      time += 0.01;
      frameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
