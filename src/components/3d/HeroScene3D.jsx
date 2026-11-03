import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroScene3D() {
  const mountRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x6366f1, 3.5); // Indigo
    keyLight.position.set(6, 6, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xec4899, 2.5); // Pink/Magenta
    fillLight.position.set(-6, -4, 4);
    scene.add(fillLight);

    const cyanPoint = new THREE.PointLight(0x06b6d4, 4, 15); // Cyan
    cyanPoint.position.set(0, 2, 4);
    scene.add(cyanPoint);

    // --- Central AI Neural Core Group ---
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Faceted Crystalline Core
    const innerGeo = new THREE.IcosahedronGeometry(2.0, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x312e81,
      emissive: 0x4338ca,
      emissiveIntensity: 0.45,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 2. Outer Luminous Wireframe Shell
    const wireGeo = new THREE.IcosahedronGeometry(2.45, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // 3. Glowing Vertex Nodes (Neural Synapses)
    const pointsGeo = new THREE.IcosahedronGeometry(2.47, 1);
    const pointsMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.14,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const vertexPoints = new THREE.Points(pointsGeo, pointsMat);
    coreGroup.add(vertexPoints);

    // 4. Gyroscopic Orbital Tech Rings
    const createRing = (radius, tube, color, rotX, rotY) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 120);
      const ringMat = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.6,
        roughness: 0.3,
        metalness: 0.9,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      return ring;
    };

    const ring1 = createRing(3.2, 0.025, 0x06b6d4, Math.PI / 3, 0.2); // Cyan
    const ring2 = createRing(3.7, 0.025, 0xa855f7, -Math.PI / 4, 0.5); // Purple
    const ring3 = createRing(4.2, 0.02, 0xec4899, Math.PI / 6, -0.4); // Pink
    coreGroup.add(ring1);
    coreGroup.add(ring2);
    coreGroup.add(ring3);

    // 5. Orbiting Data Beacon Satellites
    const beaconGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const beaconMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const beacon1 = new THREE.Mesh(beaconGeo, beaconMat1);
    const beaconMat2 = new THREE.MeshBasicMaterial({ color: 0xf472b6 });
    const beacon2 = new THREE.Mesh(beaconGeo, beaconMat2);
    scene.add(beacon1);
    scene.add(beacon2);

    // 6. Cosmic Starfield / Neural Dust Particle Cloud
    const particleCount = 650;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x818cf8), // Indigo
      new THREE.Color(0x38bdf8), // Cyan
      new THREE.Color(0xc084fc), // Purple
      new THREE.Color(0xf472b6), // Pink
      new THREE.Color(0x34d399), // Emerald
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 8.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePos[i * 3 + 2] = radius * Math.cos(phi);

      const col = palette[Math.floor(Math.random() * palette.length)];
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // --- Interactive Mouse & Motion State ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let pulseScale = 1;
    let burstVelocity = 1;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.9;
      targetY = y * 0.9;
    };

    const handlePointerDown = () => {
      pulseScale = 1.25;
      burstVelocity = 3.2;
      setIsInteracting(true);
      setTimeout(() => setIsInteracting(false), 800);
    };

    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerdown", handlePointerDown);

    // --- Window Resize ---
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // --- Animation Loop ---
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia lerp for mouse rotation
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;

      // Pulse decay
      pulseScale += (1.0 - pulseScale) * 0.08;
      burstVelocity += (1.0 - burstVelocity) * 0.04;

      coreGroup.scale.set(pulseScale, pulseScale, pulseScale);

      // Core rotations with mouse influence
      coreGroup.rotation.y = elapsedTime * 0.28 * burstVelocity + mouseX * 0.9;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.15 + mouseY * 0.7;

      // Internal wireframe counter-rotation
      wireMesh.rotation.y = -elapsedTime * 0.18;
      wireMesh.rotation.z = Math.cos(elapsedTime * 0.3) * 0.15;

      // Gyroscopic rings rotation
      ring1.rotation.z = elapsedTime * 0.45 * burstVelocity;
      ring2.rotation.x = -elapsedTime * 0.35 * burstVelocity;
      ring3.rotation.y = elapsedTime * 0.55 * burstVelocity;

      // Orbiting beacons position
      const r1 = 3.2;
      const a1 = elapsedTime * 1.2;
      beacon1.position.set(
        Math.cos(a1) * r1,
        Math.sin(a1) * Math.cos(Math.PI / 3) * r1,
        Math.sin(a1) * Math.sin(Math.PI / 3) * r1
      );

      const r2 = 3.7;
      const a2 = -elapsedTime * 0.95;
      beacon2.position.set(
        Math.cos(a2) * Math.cos(Math.PI / 4) * r2,
        Math.sin(a2) * r2,
        Math.cos(a2) * Math.sin(Math.PI / 4) * r2
      );

      // Particle system subtle breathing drift
      particleSystem.rotation.y = elapsedTime * 0.03 + mouseX * 0.15;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1 + mouseY * 0.15;

      // Dynamic light animation
      cyanPoint.position.x = Math.sin(elapsedTime * 1.5) * 3;
      cyanPoint.position.y = Math.cos(elapsedTime * 1.2) * 3;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeEventListener("pointermove", handlePointerMove);
        container.removeEventListener("pointerdown", handlePointerDown);
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[440px] sm:min-h-[520px] flex items-center justify-center select-none">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing touch-none"
        title="Interactive 3D AI Neural Core — Drag or click to interact"
      />

      {/* Floating Holographic Tech Tags Orbiting the 3D Scene */}
      <div className="pointer-events-none absolute top-4 left-4 z-10 hidden sm:flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/70 px-3 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-500/10 animate-pulse">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        <span>3D Neural Nexus Core</span>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-2 rounded-full border border-purple-500/30 bg-slate-900/70 px-3 py-1 text-[11px] font-semibold text-purple-300 backdrop-blur-md shadow-lg shadow-purple-500/10">
        <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-ping" />
        <span>Real-time WebGL &bull; Three.js</span>
      </div>

      {/* Interaction Hint */}
      <div
        className={`pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 z-10 text-[11px] font-medium transition-opacity duration-500 text-slate-400/80 bg-slate-900/60 px-3 py-0.5 rounded-full border border-slate-700/50 backdrop-blur-sm ${
          isInteracting ? "opacity-100 text-cyan-400 border-cyan-500/50" : "opacity-70"
        }`}
      >
        {isInteracting ? "⚡ Energy Shockwave Discharged" : "✦ Move cursor or click core to interact"}
      </div>
    </div>
  );
}
