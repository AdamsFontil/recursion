let fib = (num) => {
    if (num === 0) {
        return []
    } else if (num === 1 ) {
        return [0]
    } else if (num === 2 ) {
        return [0, 1]
    } else {
      let start = [0, 1]
      for (let i = 2; i < num; i++ ){
        lastTwo = start.slice(-2)
        let sum = lastTwo.reduce(function(a, b) {
              return a + b;
});
        next = sum
        start.push(sum)

    }
    return start
   }
}

console.log(fib(19))

let fibRec = (num) => {
    if (num <= 0) {
      return [];
    } else if (num === 1) {
      return [0];
    } else if (num === 2) {
      return [0, 1];
    }
    else {
      let previousArray = fibRec(num - 1)
      let lastTwoDigitsOfPrev = previousArray.slice(-2)
      let sumOfThoseDigits = lastTwoDigitsOfPrev.reduce(function(a, b) {
        return a + b;
      });
      previousArray.push(sumOfThoseDigits);
      return previousArray;
    }

  };
