'use client';
import React from 'react';
import { ScrollArea as ShadcnScrollArea } from '@/components/ui/scroll-area';

type ScrollAreaProps = React.ComponentProps<typeof ShadcnScrollArea>;

interface Props extends Omit<ScrollAreaProps, 'asChild'> {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ScrollArea = ({ children, style, className = '', ...props }: Props) => {
  return (
    <ShadcnScrollArea
      className={`pr-3 ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </ShadcnScrollArea>
  );
};

export default ScrollArea;
