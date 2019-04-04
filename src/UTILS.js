export const maxCount = 1023;
export const getNumberSystemArr = (num = 99, base = 10) => {
  // e.g. num = 8999
  let colValue = 1;
  const cols = [{ col: colValue }];

  // create the array of columns by adding a column for 1's
  // then multiply curr column number by the base to get the next col
  // repeat until the number of the column to be made is bigger than the number
  while (colValue * base <= num) {
    colValue *= base;
    cols.unshift({ col: colValue });
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

    colObj.count = colCount;
  }

  return cols;
};

const arr = getNumberSystemArr();
console.log(arr.map(c => c.col));
console.log(arr.map(c => c.count));
