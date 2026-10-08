'use client';

import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const ScrollArea = ({ children, style, className = '', ...props }: Props) => {
  return (
    <div
      data-slot="scroll-area"
      data-lenis-prevent
      className={`overflow-y-auto overscroll-contain pr-2 custom-scrollbar ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollArea;
