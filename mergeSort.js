arr = [4,3,1,5,2]

let mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr
  } else {
    let mid = Math.ceil(arr.length / 2 );
    let firstHalf = arr.slice(0, mid);
    let secondHalf = arr.slice(mid, arr.length)

    let sortedFirstHalf = mergeSort(firstHalf);
    let sortedSecondHalf = mergeSort(secondHalf);
      let sortedArray = [];
    let i = 0;
    let j = 0;

    while (i < sortedFirstHalf.length && j < sortedSecondHalf.length) {
      if (sortedFirstHalf[i] < sortedSecondHalf[j]) {
        sortedArray.push(sortedFirstHalf[i]);
        i++;
      } else {
        sortedArray.push(sortedSecondHalf[j]);
        j++;
      }
    }

    while (i < sortedFirstHalf.length) {
      sortedArray.push(sortedFirstHalf[i]);
      i++;
    }

    while (j < sortedSecondHalf.length) {
      sortedArray.push(sortedSecondHalf[j]);
      j++;
    }

    return sortedArray;

  }
}

console.log(mergeSort(arr))
