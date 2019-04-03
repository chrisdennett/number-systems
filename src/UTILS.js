export const maxCount = 1023;

export const toBinary = (num, binaryCols) => {
  let binaryArr = new Array(binaryCols.length);
  let currentNum = num;
  let colNum;
  for (let i = 0; i < binaryCols.length; i++) {
    colNum = binaryCols[i];
    if (currentNum >= colNum) {
      binaryArr[i] = 1;
      currentNum -= colNum;
    } else {
      binaryArr[i] = 0;
    }
  }

  return binaryArr;
};

export const createBinaryColumns = (maxValue = maxValue) => {
  const binaryCols = [];
  let currentValue = 1;

  while (currentValue < maxValue) {
    binaryCols.unshift(currentValue);

    currentValue *= 2;
  }

  return binaryCols;
};
