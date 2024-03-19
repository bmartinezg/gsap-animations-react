import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ScrollUsage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<GSAPTimeline>();
  const isMobile = window.innerWidth <= 640;

  console.log(isMobile);
  useEffect(() => {
    const ctx = gsap.context(() => {
      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          pin: true,
          start: "top center",
          end: "bottom center",
          markers: true,
          endTrigger: containerRef.current,
        },
      });
    }, containerRef);

    if (!tlRef.current) return;

    tlRef.current.to(containerRef.current, {
      duration: 1,
      borderRadius: "80px",
      width: isMobile ? "600px" : "1200px",
      maxWidth: isMobile ? "600px" : "1200px",
      minWidth: isMobile ? "600px" : "1200px",
    });

    return () => ctx.revert();
  }, []);

  const Divisor = () => <div style={{ height: "50vh" }}></div>;

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <Divisor />
      <div>
        <div
          style={{
            height: isMobile ? "200px" : "500px",
            width: isMobile ? "200px" : "500px",
            maxWidth: "none",
            backgroundColor: "red",
            borderRadius: "50%",
            backgroundImage: "url(/wallpaper.jpg)",
            backgroundPosition: "center center",
          }}
          ref={containerRef}
        ></div>
      </div>

      <Divisor />
    </section>
  );
};
