import { useLayoutEffect, useRef, useState } from "react";

export default function LayoutEffectExample() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setHeight(boxRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div className="card">
      <h3>Ćwiczenie 5: useLayoutEffect</h3>
      <div ref={boxRef} style={{ padding: "20px", background: "#2e4d3e", borderRadius: "8px" }}>
        Mierzę swoją wysokość przed wyświetleniem!
      </div>
      <p>Wysokość komponentu: {height}px</p>
    </div>
  );
}