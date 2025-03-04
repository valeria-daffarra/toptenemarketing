'use client';
import { useRef, useEffect } from "react";

const BubblesCanvas = () => {
  const canvasRef = useRef(null);
  const bubbles = [];
  const iconPaths = ["/icon1.svg", "/icon2.svg", "/icon3.svg", "/icon4.svg", "/icon5.svg", "/icon6.svg", "/icon7.svg"]; // Add more as needed
  const colors = ["#02a9f5", "#df7915", "#6c4484", "#db0a6c"]; // Bubble colors
  const images = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Preload images
    iconPaths.forEach((src) => {
      const img = new Image();
      img.src = src;
      images.push(img);
    });

    class Bubble {
      constructor() {
        this.radius = Math.random() * 30 + 30; // Adjust size
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.dx = (Math.random() - 0.5) * 4;
        this.dy = (Math.random() - 0.5) * 4;
        this.image = images[Math.floor(Math.random() * images.length)]; // Assign random icon
        this.color = colors[Math.floor(Math.random() * colors.length)]; // Assign random color
      }

      draw() {
        ctx.globalAlpha = 0.3; // Set opacity to 30%
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        // Reset opacity for the icon
        ctx.globalAlpha = 1;

        // Draw icon centered in the bubble
        if (this.image.complete) {
          const iconSize = this.radius * 1.2; // Slightly smaller than bubble
          ctx.drawImage(
            this.image,
            this.x - iconSize / 2,
            this.y - iconSize / 2,
            iconSize,
            iconSize
          );
        }
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x - this.radius < 0 || this.x + this.radius > width) this.dx *= -1;
        if (this.y - this.radius < 0 || this.y + this.radius > height) this.dy *= -1;

        this.draw();
      }
    }

    for (let i = 0; i < 20; i++) {
      bubbles.push(new Bubble());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      bubbles.forEach((bubble) => bubble.update());
      requestAnimationFrame(animate);
    };

    // Start animation once images are loaded
    Promise.all(images.map(img => new Promise(resolve => (img.onload = resolve)))).then(animate);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, zIndex:-10 }} />;
};

export default BubblesCanvas;