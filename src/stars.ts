/** @prettier */

export const extractIntDeci = (num: number): number[] => {
  const i = num > 0 ? Math.floor(num) : Math.ceil(num);
  const sepNum = String(num).split('.');
  const d = sepNum.length === 2 ? parseInt(sepNum[1], 10) : 0;
  return [i, d];
};

export const getStarValue = (index: number, rateValue: number): number => {
  const [integer, decimal] = extractIntDeci(parseFloat(rateValue.toFixed(1)));
  if (index <= integer) {
    return 10;
  } else if (index - 1 === integer) {
    return decimal;
  }
  return 0;
};

export const getSvg = (value: number, color: string, bgColor: string): string => {
  switch (value) {
    case 1:
      return `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cpolygon fill=%22%23${bgColor}%22 points=%2212,2 9.19,8.63 4,9.07 4,10.973 7.46,13.97 5.82,21 12,17.27 18.18,21 16.54,13.97 22,9.24 14.811,8.63 %22/%3E%3Cpolygon fill=%22%23${color}%22 points=%224,9.07 2,9.24 4,10.973 %22/%3E%3C/svg%3E`;
    case 2:
      return `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cg%3E%3Cpolygon fill=%22%23${color}%22 points=%226,20.892 6,20.228 5.82,21%22/%3E%3Cpolygon fill=%22%23${color}%22 points=%226,8.901 2,9.24 6,12.705%22/%3E%3C/g%3E%3Cpolygon fill=%22%23${bgColor}%22 points=%2212,2 9.19,8.63 6,8.901 6,12.705 7.46,13.97 6,20.228 6,20.892 12,17.27 18.18,21 16.54,13.97 22,9.24 14.811,8.63 %22/%3E%3C/svg%3E`;
    case 3:
      return `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cpolygon fill=%22%23${bgColor}%22 points=%2212,2 9.19,8.63 8,8.731 8,19.684 12,17.27 18.18,21 16.54,13.97 22,9.24 14.811,8.63 %22/%3E%3Cpolygon fill=%22%23${color}%22 points=%225.82,21 8,19.684 8,8.731 2,9.24 7.46,13.97 %22/%3E%3C/svg%3E`;
    case 4:
      return `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cpolygon fill=%22%23${bgColor}%22 points=%2212,2 10,6.719 10,18.477 12,17.27 18.18,21 16.54,13.97 22,9.24 14.811,8.63 %22/%3E%3Cpolygon fill=%22%23${color}%22 points=%225.82,21 10,18.477 10,6.719 9.19,8.63 2,9.24 7.46,13.97 %22/%3E%3C/svg%3E`;
    case 5:
      return `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cpolygon fill=%22%23${color}%22 points=%229.19,8.63 2,9.24 7.46,13.97 5.82,21 12,17.27 12,2 %22/%3E%3Cpolygon fill=%22%23${bgColor}%22 points=%2212,2 12,17.27 18.18,21 16.54,13.97 22,9.24 14.811,8.63 %22/%3E%3C/svg%3E`;
    case 6:
      return `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cpolygon fill=%22%23${color}%22 points=%225.82,21 12,17.27 14,18.477 14,6.718 12,2 9.19,8.63 2,9.24 7.46,13.97 %22/%3E%3Cpolygon fill=%22%23${bgColor}%22 points=%2214,6.718 14,18.477 18.18,21 16.54,13.97 22,9.24 14.811,8.63 %22/%3E%3C/svg%3E`;
    case 7:
      return `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cpolygon fill=%22%23${color}%22 points=%225.82,21 12,17.27 16,19.685 16,8.731 14.811,8.63 12,2 9.19,8.63 2,9.24 7.46,13.97 %22/%3E%3Cpolygon fill=%22%23${bgColor}%22 points=%2216,19.685 18.18,21 16.54,13.97 22,9.24 16,8.731 %22/%3E%3C/svg%3E`;
    case 8:
      return `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cpolygon fill=%22%23${color}%22 points=%225.82,21 12,17.27 18,20.892 18,20.229 16.54,13.97 18,12.705 18,8.9 14.811,8.63 12,2 9.19,8.63 2,9.24 7.46,13.97 %22/%3E%3Cg%3E%3Cpolygon fill=%22%23${bgColor}%22 points=%2218,20.229 18,20.892 18.18,21%22/%3E%3Cpolygon fill=%22%23${bgColor}%22 points=%2218,12.705 22,9.24 18,8.9%22/%3E%3C/g%3E%3C/svg%3E`;
    case 9:
      return `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cpolygon fill=%22%23${bgColor}%22 points=%2220,10.973 22,9.24 20,9.07 %22/%3E%3Cpolygon fill=%22%23${color}%22 points=%225.82,21 12,17.27 18.18,21 16.54,13.97 20,10.973 20,9.07 14.811,8.63 12,2 9.19,8.63 2,9.24 7.46,13.97 %22/%3E%3C/svg%3E`;
    case 10:
      return `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cpolygon fill=%22%23${color}%22 points=%2212,2 9.19,8.63 2,9.24 7.46,13.97 5.82,21 12,17.27 18.18,21 16.54,13.97 22,9.24 14.811,8.63 %22/%3E%3C/svg%3E`;
    default:
      return `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cpolygon fill=%22%23${bgColor}%22 points=%2212,2 9.19,8.63 2,9.24 7.46,13.97 5.82,21 12,17.27 18.18,21 16.54,13.97 22,9.24 14.811,8.63 %22/%3E%3C/svg%3E`;
  }
};

export const getStrokeSvg = (strokeColor: string): string => {
  return `data:image/svg+xml;charset=utf8, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22%3E%3Cpolygon stroke=%22%23${strokeColor}%22 fill=%22%23000000%22 fill-opacity=%220.0%22 points=%2212,2 9.19,8.63 2,9.24 7.46,13.97 5.82,21 12,17.27 18.18,21 16.54,13.97 22,9.24 14.811,8.63 %22/%3E%3C/svg%3E`;
};
