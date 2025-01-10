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

fiboRecursive(300);
