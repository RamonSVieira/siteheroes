import { FC, ReactNode, useRef, useState, useEffect } from "react";

interface TooltipProps {
  children: ReactNode;
  tooltip?: string;
}

const Tooltip: FC<TooltipProps> = ({ children, tooltip }): JSX.Element => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{
    left: number;
    top: number;
  }>({ left: 0, top: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!tooltipRef.current) return;
    const tooltipWidth = tooltipRef.current.offsetWidth;
    const tooltipHeight = tooltipRef.current.offsetHeight;
    const containerRect = event.currentTarget.getBoundingClientRect();
    const left = event.clientX - containerRect.left - tooltipWidth / 2;
    const top = event.clientY - containerRect.top - tooltipHeight - 10; // Adjust 10 pixels to move the tooltip slightly above the cursor
    setTooltipPosition({ left, top });
  };

  const handleMouseOver = () => {
    timeoutRef.current = window.setTimeout(() => {
      setShowTooltip(true);
    }, 1000); // Show tooltip after 1000 milliseconds (1 second)
  };

  const handleMouseOut = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowTooltip(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="group relative inline-block"
    >
      {children}
      <span
        ref={tooltipRef}
        style={{
          left: tooltipPosition.left + "px",
          top: tooltipPosition.top + "px",
        }}
        className={`invisible ${
          showTooltip ? "opacity-100" : "opacity-0"
        } group-hover:visible group-hover:opacity-100 transition bg-blue-500 text-white p-1 rounded absolute whitespace-nowrap`}
      >
        {tooltip}
      </span>
    </div>
  );
};

export default Tooltip;
