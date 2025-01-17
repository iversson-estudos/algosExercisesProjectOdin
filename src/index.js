import "./styles.css";

function fiboRecursive(sequence, sum = 0, prev = 1) {
  if (sequence == 0) {
    setTimeout(1000);
    return sum;
  }
  const main = document.getElementsByClassName("main")[0]; // Ensure the `main` element exists in your HTML
  main.textContent = sum;

  setTimeout(() => {
    fiboRecursive(sequence - 1, sum + prev, sum);
  }, 1000);
}

/**MERGE SORT */
function mergeSort(array) {
  // Base case: Arrays with 1 or 0 elements are already sorted
  if (array.length <= 1) {
    return array;
  }

  // Step 1: Divide the array into two halves
  const mid = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, mid);
  const rightHalf = array.slice(mid);

  // Step 2: Recursively sort both halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Step 3: Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(leftArray, rightArray) {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Step 4: Compare elements from both arrays and build the sorted array
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  // Step 5: Append any remaining elements
  while (leftIndex < leftArray.length) {
    mergedArray.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    mergedArray.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log("Sorted Array:", sortedArray);
