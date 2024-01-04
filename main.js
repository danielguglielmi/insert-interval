const insertInterval = (input, merge) => {
  const newIntervals = [];
  const mergeInit = merge[0];
  const mergeEnd = merge[1];

  for (let i = 0; i < input.length; i++) {
    let temp = [];

    let start = input[i][0];
    let end = input[i][1];

    // validate if End is lower than the end of the last inserted in newIntervals
    if (
      newIntervals.length > 0 &&
      end <= newIntervals[newIntervals.length - 1][1]
    ) {
      continue;
    }

    if (mergeInit >= start && mergeInit <= end && mergeEnd > end) {
      end = mergeEnd;

      // Verify if the last value coming in the input interval is a higher value
      let j = i + 1;      
      while (j < input.length - 1) {
        if (mergeEnd > input[j][0] && mergeEnd < input[j][1]) {
          end = input[j][1];
          break;
        } else j++;
      }
    }

    if (mergeInit < start && mergeEnd >= start) {
      start = mergeInit;
    }

    temp = [start, end];
    newIntervals.push(temp);
  }
  return newIntervals;
};

module.exports = {
  insertInterval,
};
