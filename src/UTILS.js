const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
const digitArr = digits.split("");

export const getNumberSystemArr = (
  num = 99,
  base = 10,
  totalColumns = "auto"
) => {
  // if total columns auto determine the number needed by the num param

  // e.g. num = 8999
  let cols;
  let colValue = 1;
  cols = [{ col: colValue }];

  if (totalColumns === "auto") {
    // create the array of columns by adding a column for 1's
    // then multiply curr column number by the base to get the next col
    // repeat until the number of the column to be made is bigger than the number
    while (colValue * base <= num) {
      colValue *= base;
      cols.unshift({ col: colValue });
    }
  } else {
    // cols = Array.from({ length: totalColumns });
    for (let c = 1; c < totalColumns; c++) {
      colValue *= base;
      cols.unshift({ col: colValue });
    }
    console.log(cols);
  }

  // then go through those columns in reverse and minus the value of the column
  // from the number as base times or until the column number can't be removed any
  // more.
  for (let colObj of cols) {
    let colCount = 0;

    for (let j = 0; j < base; j++) {
      if (num >= colObj.col) {
        num -= colObj.col;
        colCount++;
      }
    }

    colObj.count = digitArr[colCount];
  }

  return cols;
};
