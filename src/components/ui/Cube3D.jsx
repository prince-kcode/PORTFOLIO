import React from "react";
import "./Cube3D.css";

const faces = [
  { className: "cube-face front", label: "AI" },
  { className: "cube-face back", label: "ML" },
  { className: "cube-face right", label: "React" },
  { className: "cube-face left", label: "Node" },
  { className: "cube-face top", label: "Code" },
  { className: "cube-face bottom", label: "Ship" },
];

export default function Cube3D() {
  return (
    <div className="cube-scene" aria-hidden="true">
      <div className="cube-spin">
        <div className="cube">
          {faces.map((f) => (
            <div key={f.className} className={f.className}>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
