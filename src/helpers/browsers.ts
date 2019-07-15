/** @prettier */

const ua = navigator.userAgent.toLowerCase();

export const isMSIE = (): boolean => {
  return ua.indexOf('msie') !== -1;
};

export const isIE11 = (): boolean => {
  return ua.indexOf('trident/7') !== -1;
};

export const isIE = (): boolean => {
  return isIE11() || isMSIE();
};
