import "./styles.css";

function fiboRecursive(sequence, sum = 0, prev = 1) {
  if (sequence == 0) {
    console.log(sum);
    return sum;
  } else {
    console.log(sum);
    return fiboRecursive(sequence - 1, sum + prev, sum);
  }
}
