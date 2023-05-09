export const generateArray = (length) => {
  const arr = []
  while (arr.length < length)
    arr.push(parseInt(Math.random() * 100000))
  return arr
}

export const bubbleSortSync = (arr) => {
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length; j++)
      if (!isNaN(arr[j]) && !isNaN(arr[j + 1]))
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j + 1]
          arr[j + 1] = arr[j]
          arr[j] = temp
        }
  return arr
}

export const bubbleSort = (arr) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(bubbleSortSync(arr)), 0);
    } catch (ex) {
      console.log(ex)
      reject(ex)
    }
  })
}

export const quickSortSync = (arr) => {
  const sort = (vet, esq, dir) => {
    var ce = esq;
    var cd = dir;
    var meio = parseInt((ce + cd) / 2);
    while (ce < cd) {
      while (vet[ce] < vet[meio]) {
        ce++;
      }
      while (vet[cd] > vet[meio]) {
        cd--;
      }
      if (ce <= cd) {
        var temp = vet[ce];
        vet[ce] = vet[cd];
        vet[cd] = temp;
        ce++;
        cd--;
      }
    }
    if (cd > esq)
      sort(vet, esq, cd);

    if (ce < dir)
      sort(vet, ce, dir);
  }
  quickSort(arr, 0, arr.length);
  return arr
}

export const quickSort = (arr) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(quickSortSync(arr)), 0);
    } catch (ex) {
      console.log(ex)
      reject(ex)
    }
  })
}