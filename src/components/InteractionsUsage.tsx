import { gsap } from "gsap";

export const InteractionsUsage = () => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.target, { rotation: "50", yoyo: true, repeat: 1 });
  };

  const onEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.target, { scale: 1.2 });
  };

  const onLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    gsap.to(e.target, { scale: 1 });
  };

  return (
    <div onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={handleClick}>
      3. Interaction Usage
    </div>
  );
};
