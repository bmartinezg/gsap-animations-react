import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const TimeLineUsage = () => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().to(".square", { rotate: 360 }).to(".square2", { x: 200 });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <div className="square">3. Time Line Usage</div>
      <div className="square2">3. Time Line Usage</div>
    </div>
  );
};
