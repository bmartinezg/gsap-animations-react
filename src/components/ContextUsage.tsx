import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const ContextUsage = () => {
  /* Creamos solamente una referencia.
        Esto nos permite acceder a todos los elementos hijos para animarlos desde la referencia padre.
    */
  const parentContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".title-1", { rotate: 360, duration: 5 });
      gsap.to(".title-2", { backgroundColor: "red", duration: 5 });
    }, parentContainer);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={parentContainer}>
      <div className="title-1">2. GSAP Context Usage with children elements</div>
      <div className="title-2">2. GSAP Context Usage with children elements</div>
    </div>
  );
};
