/** @prettier */

export const isDevs = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

export const isProd = (): boolean => {
  return process.env.NODE_ENV === 'production';
};
