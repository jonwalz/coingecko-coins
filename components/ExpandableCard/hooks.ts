import React, { MutableRefObject, useEffect } from 'react'

interface Config {
  callbackFunction: () => void
  options: IntersectionObserverInit
  containerRef: MutableRefObject<Element>
}

export function useIntersectionObserver({
  callbackFunction,
  options,
  containerRef,
}: Config) {
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])
}
