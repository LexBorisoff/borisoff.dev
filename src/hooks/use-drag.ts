import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { AppStateType } from '../layout/expertise/types';

interface DraggingState {
  frontend: boolean;
  backend: boolean;
}

const initialFullstackState: DraggingState = {
  frontend: false,
  backend: false,
};

interface DragRefs<
  Container extends HTMLElement = HTMLDivElement,
  App extends HTMLElement = HTMLDivElement,
  Frontend extends HTMLElement = HTMLDivElement,
  Backend extends HTMLElement = HTMLDivElement,
> {
  container: React.RefObject<Container>;
  app: React.RefObject<App>;
  frontend: React.RefObject<Frontend>;
  backend: React.RefObject<Backend>;
}

interface DragResult<
  Container extends HTMLElement = HTMLDivElement,
  App extends HTMLElement = HTMLDivElement,
  Frontend extends HTMLElement = HTMLDivElement,
  Backend extends HTMLElement = HTMLDivElement,
> {
  appState: AppStateType;
  isDragging: DraggingState;
  isDroppable: boolean;
  refs: DragRefs<Container, App, Frontend, Backend>;
  reset: () => void;
}

export function useDrag<
  Container extends HTMLElement = HTMLDivElement,
  App extends HTMLElement = HTMLDivElement,
  Frontend extends HTMLElement = HTMLDivElement,
  Backend extends HTMLElement = HTMLDivElement,
>(): DragResult<Container, App, Frontend, Backend> {
  const containerRef = useRef<Container>(null);
  const appRef = useRef<App>(null);
  const frontendRef = useRef<Frontend>(null);
  const backendRef = useRef<Backend>(null);

  const [appState, setAppState] = useState<AppStateType>('initial');
  const [isDragging, setIsDragging] = useState<DraggingState>(
    initialFullstackState,
  );
  const [isDroppable, setIsDroppable] = useState(false);

  const getDragHandler = useCallback((side: keyof DraggingState) => {
    return function handler() {
      setIsDragging((prev) => ({ ...prev, [side]: true }));
    };
  }, []);

  const handleDragFrontend = useMemo(
    () => getDragHandler('frontend'),
    [getDragHandler],
  );

  const handleDragBackend = useMemo(
    () => getDragHandler('backend'),
    [getDragHandler],
  );

  const isWithin = useCallback(
    (rect: DOMRect, e: MouseEvent, edgeX: 'left' | 'right'): boolean => {
      if (appRef.current == null) {
        return false;
      }

      const offset = 5;
      const app = appRef.current.getBoundingClientRect();

      const left = app.left - offset;
      const right = app.right + offset;
      const top = app.top - offset;
      const bottom = app.bottom + offset;

      const withinX = rect[edgeX] > left && rect[edgeX] < right;
      const topWithinY = rect.top > top && rect.top < bottom;
      const bottomWithinY = rect.bottom > top && rect.bottom < bottom;
      const withinY = topWithinY || bottomWithinY;

      const clientX = e.clientX > app.left && e.clientX < app.right;
      const clientY = e.clientY > app.top && e.clientY < app.bottom;

      return withinX && withinY && clientX && clientY;
    },
    [],
  );

  useEffect(() => {
    const container = containerRef.current;
    const frontend = frontendRef.current;
    const backend = backendRef.current;

    function handleDragging(e: MouseEvent): void {
      setIsDragging((prevDragging) => {
        if (prevDragging.frontend && frontend != null) {
          const frontendRect = frontend.getBoundingClientRect();
          if (isWithin(frontendRect, e, 'right')) {
            setAppState((prevState) =>
              prevState === 'backend' ? 'fullstack' : 'frontend',
            );
          }
        }

        if (prevDragging.backend && backend != null) {
          const backendRect = backend.getBoundingClientRect();
          if (isWithin(backendRect, e, 'left')) {
            setAppState((prevState) =>
              prevState === 'frontend' ? 'fullstack' : 'backend',
            );
          }
        }

        return initialFullstackState;
      });

      setIsDroppable(false);
    }

    function handleDroppable(e: MouseEvent): void {
      setIsDragging((prevDragging) => {
        if (prevDragging.frontend && frontend != null) {
          const frontendRect = frontend.getBoundingClientRect();
          setIsDroppable(isWithin(frontendRect, e, 'right'));
        }

        if (prevDragging.backend && backend != null) {
          const backendRect = backend.getBoundingClientRect();
          setIsDroppable(isWithin(backendRect, e, 'left'));
        }

        return prevDragging;
      });
    }

    if (container != null) {
      container.addEventListener('mouseup', handleDragging);
      container.addEventListener('mousemove', handleDroppable);
    }
    if (frontend != null) {
      frontend.addEventListener('mousedown', handleDragFrontend);
    }
    if (backend != null) {
      backend.addEventListener('mousedown', handleDragBackend);
    }

    return () => {
      if (container != null) {
        container.removeEventListener('mouseup', handleDragging);
        container.removeEventListener('mousemove', handleDroppable);
      }
      if (frontend != null) {
        frontend.removeEventListener('mousedown', handleDragFrontend);
      }
      if (backend != null) {
        backend.removeEventListener('mousedown', handleDragBackend);
      }
    };
  }, [appState, handleDragBackend, handleDragFrontend, isWithin]);

  return {
    appState,
    isDragging,
    isDroppable,
    refs: {
      container: containerRef,
      app: appRef,
      frontend: frontendRef,
      backend: backendRef,
    },
    reset: () => {
      setAppState('initial');
    },
  };
}
