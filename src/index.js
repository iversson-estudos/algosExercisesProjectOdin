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
function mergeSortRecursive(array) {
  /*FIRST WE DIVIDE THE ARRAY INTO SMALLERS LEFT AND RIGHT */
  if (array.length > 2) {
    const arrayleft = array.slice(0, Math.floor(array.length / 2));
    const arrayRight = array.slice(Math.floor(array.length / 2));

    console.log(array);

    mergeSortRecursive(arrayleft);
    mergeSortRecursive(arrayRight);
  } else if (array.length == 1) {
    return array;
  } else {
  }
}
