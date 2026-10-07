import React from 'react';
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

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={`${widthDialogClasses[maxWidth]} bg-surface drop-shadow-shadow max-w-7xl gap-0 shadow-xl`}
        showCloseButton={withCloseButton}
      >
        <DialogHeader>
          <DialogTitle className='text-3xl font-bold'>{title}</DialogTitle>
          <DialogDescription asChild className='text-primary -mt-1 text-base'>
            <div>{desc}</div>
          </DialogDescription>
          {(title || desc) && <Separator className='-mt-1 border' />}
        </DialogHeader>
        <ScrollArea
          style={{
            maxHeight: screenHeight - 200,
          }}
        >
          <div className={`${title || desc ? 'my-2' : 'mt-0'}`}>{children}</div>
        </ScrollArea>
        {footer && <div className='mt-4'>{footer}</div>}
      </DialogContent>
    </Dialog>
  );
};

export default ModalDialog;
