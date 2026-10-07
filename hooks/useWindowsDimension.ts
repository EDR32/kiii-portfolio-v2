'use client';

import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getSnapshot() {
  return `${window.innerWidth}x${window.innerHeight}`;
}

function getServerSnapshot() {
  return '0x0';
}

export default function useWindowDimensions(props?: {
  resizeListener?: boolean;
}) {
  const resizeListener = props?.resizeListener ?? true;

  const dimensions = useSyncExternalStore(
    resizeListener ? subscribe : () => () => {},
    getSnapshot,
    getServerSnapshot
  );

  const [width, height] = dimensions.split('x').map(Number);
  const hasWindow = typeof window !== 'undefined';

  return { width, height, hasWindow };
}
