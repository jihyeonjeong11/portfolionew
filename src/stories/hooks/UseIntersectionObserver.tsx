import React, { RefObject, useEffect, useState, MutableRefObject } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

interface RefProps {
  ref?: HTMLDivElement;
}


//https://www.tektutorialshub.com/typescript/type-annotation-in-typescript/#function-arguments-return-types
// return type 자체를 지정하는 용법이기 때문에 아래처럼 사용함.


function useIntersectionObserver(
  elementRef: React.ForwardedRef<HTMLDivElement>,
  { threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false }: Args
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const newRef = React.createRef<HTMLDivElement>()


  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = newRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen]);

  return entry;
}

export default useIntersectionObserver; 