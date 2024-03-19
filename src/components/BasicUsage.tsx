import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const BasicUsage = () => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(container.current, { rotate: 360, duration: 2 });
  }, []);

  return <div ref={container}>1. Basic animation usage</div>;
};
