import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const CardRight = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-[rgba(65,47,123,0.15)] rounded-lg p-6 border border-white/10 hover:border-accent/40 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardRight;
