import React, { useRef, useState, useEffect } from "react";

export default function TiltCard({
  children,
  className = "",
  maxTilt = 12,
  glare = true,
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    // Disable tilt on touch-only mobile devices to avoid jarring scroll stutter
    if (typeof window !== "undefined") {
      setSupportsHover(window.matchMedia("(hover: hover)").matches);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!supportsHover) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    });

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlareStyle({
        opacity: 0.35,
        background: `radial-gradient(circle 240px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.45), transparent 70%)`,
        transition: "opacity 0.2s ease-out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!supportsHover) return;

    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
    });
    setGlareStyle({
      opacity: 0,
      transition: "opacity 0.5s ease-out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: supportsHover ? "preserve-3d" : "flat",
        willChange: supportsHover ? "transform" : "auto",
        ...style,
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {glare && supportsHover && (
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity"
          style={glareStyle}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
