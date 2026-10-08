"use client";

import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import ScrollArea from './ScrollArea';
import useWindowsLayout from '../../hooks/useWindowsLayout';
import { Separator } from '../ui/separator';

type WidthDialog = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const widthDialogClasses: Record<WidthDialog, string> = {
  sm: 'max-w-md!',
  md: 'max-w-2xl!',
  lg: 'max-w-4xl!',
  xl: 'max-w-7xl!',
  xxl: 'max-w-[1700px]!',
};

export interface ModalProps {
  title?: string;
  desc?: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  maxWidth?: WidthDialog;
  withCloseButton?: boolean;
  footer?: React.ReactNode;
}

const ModalDialog = ({
  desc,
  title,
  handleClose,
  open,
  children,
  maxWidth = 'sm',
  withCloseButton = true,
  footer,
}: ModalProps) => {
  const { screenHeight } = useWindowsLayout();

  useEffect(() => {
    if (open) {
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      lenis?.stop();
      return () => {
        lenis?.start();
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        data-lenis-prevent
        className={`${widthDialogClasses[maxWidth]} bg-[#181931] border border-white/10 text-white shadow-2xl p-6 sm:p-8 rounded-2xl gap-0 max-h-[90vh] flex flex-col overscroll-contain`}
        showCloseButton={withCloseButton}
      >
        <DialogHeader className="mb-4 text-left shrink-0">
          {title && <DialogTitle className='text-2xl sm:text-3xl font-bold text-white'>{title}</DialogTitle>}
          {desc && (
            <DialogDescription asChild className='text-white/70 mt-1 text-sm sm:text-base'>
              <div>{desc}</div>
            </DialogDescription>
          )}
          {(title || desc) && <Separator className='mt-3 border-white/10' />}
        </DialogHeader>

        <ScrollArea
          data-lenis-prevent
          className="flex-1 min-h-0 w-full"
          style={{
            maxHeight: screenHeight > 300 ? screenHeight - 240 : '65vh',
          }}
        >
          <div data-lenis-prevent className={`${title || desc ? 'my-2' : 'mt-0'} pr-3`}>
            {children}
          </div>
        </ScrollArea>

        {footer && <div className='mt-4 pt-3 border-t border-white/10 shrink-0'>{footer}</div>}
      </DialogContent>
    </Dialog>
  );
};

export default ModalDialog;
