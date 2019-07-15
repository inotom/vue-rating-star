/** @prettier */

const ua = navigator.userAgent.toLowerCase();

export const isMobile = (width = 768): boolean => {
  return window.matchMedia(`(max-width: ${width}px)`).matches;
};

export const isTouchable = (): boolean => {
  return window.ontouchstart === null;
};

export const isIpad = (): boolean => {
  return ua.indexOf('ipad') !== -1;
};
