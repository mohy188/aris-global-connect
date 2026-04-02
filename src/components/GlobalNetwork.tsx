import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  baseOpacity: number;
  phase: number;
  speed: number;
}

interface Line {
  from: number;
  to: number;
  phase: number;
  speed: number;
}

export default function GlobalNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Define node positions as % of canvas
    const nodePositions = [
      // North America
      { x: 0.2, y: 0.3 },
      { x: 0.25, y: 0.4 },
      { x: 0.15, y: 0.35 },
      // South America
      { x: 0.28, y: 0.65 },
      { x: 0.3, y: 0.7 },
      // Europe
      { x: 0.48, y: 0.28 },
      { x: 0.52, y: 0.32 },
      { x: 0.45, y: 0.35 },
      // Africa
      { x: 0.5, y: 0.55 },
      { x: 0.48, y: 0.6 },
      // Middle East / Pakistan area (highlight)
      { x: 0.6, y: 0.38 },
      { x: 0.62, y: 0.42 },
      { x: 0.58, y: 0.45 },
      // South Asia
      { x: 0.65, y: 0.45 },
      { x: 0.68, y: 0.48 },
      // East Asia
      { x: 0.75, y: 0.35 },
      { x: 0.78, y: 0.38 },
      { x: 0.8, y: 0.42 },
      // Southeast Asia
      { x: 0.73, y: 0.52 },
      // Australia
      { x: 0.8, y: 0.7 },
    ];

    const points: Point[] = nodePositions.map((pos) => ({
      x: pos.x,
      y: pos.y,
      baseOpacity: 0.4 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 1.5,
    }));

    // Connect nearby nodes
    const lines: Line[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.25) {
          lines.push({
            from: i,
            to: j,
            phase: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.8,
          });
        }
      }
    }

    const draw = (time: number) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const t = time / 1000;

      // Draw lines
      lines.forEach((line) => {
        const from = points[line.from];
        const to = points[line.to];
        const opacity = 0.08 + 0.12 * Math.sin(t * line.speed + line.phase) ** 2;
        ctx.beginPath();
        ctx.moveTo(from.x * w, from.y * h);
        ctx.lineTo(to.x * w, to.y * h);
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw points
      points.forEach((p) => {
        const blinkFactor = Math.sin(t * p.speed + p.phase);
        const opacity = 0.2 + 0.8 * ((blinkFactor + 1) / 2);
        const radius = 2 + 1.5 * ((blinkFactor + 1) / 2);

        // Glow
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.1})`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
