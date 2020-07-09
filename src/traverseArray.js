const traverseArray = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      traverseArray(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
};

module.exports = traverseArray;
