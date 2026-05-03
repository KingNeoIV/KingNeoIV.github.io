import { useEffect, useRef } from 'react';

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particleColor = 'rgba(16, 185, 129, 0.65)';
    const lineColor = 'rgba(16, 185, 129, 0.25)';

    let animationFrameId: number;
    let particlesArray: Particle[] = [];
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 120,
    };

    const setSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    setSize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', setSize);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }

      update() {
        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;

        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            if (mouse.x < this.x) this.x += 1;
            else if (mouse.x > this.x) this.x -= 1;
            if (mouse.y < this.y) this.y += 1;
            else if (mouse.y > this.y) this.y -= 1;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      const isMobile = window.innerWidth < 768;
      
      // Setting 1: Desktop (High density)
      // Setting 2: Mobile (Low density, but high visibility)
      let numberOfParticles;
      
      if (isMobile) {
        // Mobile needs fewer particles to avoid clutter
        numberOfParticles = 40; 
      } else {
        // Desktop scales with resolution
        numberOfParticles = (canvas.height * canvas.width) / 9000;
        // Ensure desktop doesn't go below a certain point if the window is resized small
        if (numberOfParticles < 100) numberOfParticles = 100;
      }

      for (let i = 0; i < numberOfParticles; i++) {
        // Bigger size for better visibility on all screens
        const size = Math.random() * 3 + 2; 
        const x = Math.random() * (canvas.width - size * 2) + size * 2;
        const y = Math.random() * (canvas.height - size * 2) + size * 2;
        
        // Speed
        const directionX = Math.random() * 1.2 - 0.6;
        const directionY = Math.random() * 1.2 - 0.6;
        
        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    };

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Increased connection distance to 160 so more lines appear
          if (distance < 160) {
            ctx.strokeStyle = lineColor;
            // Thicker lines for mobile visibility
            ctx.lineWidth = 1.8; 
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 bg-black pointer-events-none"
    />
  );
}