const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const randomArray = (min, max, lngt) => {
  const arr = [];
  for (let i = 0; i < lngt; i++)
    arr.push(Math.floor(Math.random() * (max + min) - min));

  return arr;
};

const ZOOM = 0.05;
let arrNumber = randomArray(
  window.innerHeight / ZOOM,
  0,
  window.innerWidth / ZOOM
);
const render = () => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  arrNumber.map((item, index) => {
    ctx.fillRect(index * ZOOM, window.innerHeight, 2 * ZOOM, item * ZOOM);
    let r = ((104/arrNumber.length) * index) % 104;
    let g = ((1/arrNumber.length) * index) % 1;
    let b = ((250/arrNumber.length) * index) % 250;
  
    ctx.fillStyle =
      "rgb(" + r + "," + g + "," + b + ")";
  });

  requestAnimationFrame(render);
};
function HeapSort(A) {
  if (A.length == 0) return [];
  var n = A.length,
    i = Math.floor(n / 2),
    j,
    k,
    t;
  while (true) {
    if (i > 0) t = A[--i];
    else {
      n--;
      if (n == 0) return A;
      t = A[n];
      A[n] = A[0];
    }
    j = i;
    k = j * 2 + 1;
    while (k < n) {
      if (k + 1 < n && A[k + 1] > A[k]) k++;
      if (A[k] > t) {
        A[j] = A[k];
        j = k;
        k = j * 2 + 1;
      } else break;
    }
    A[j] = t;
  }
}
(async () => {
  render();

  console.time("1");
//   HeapSort(arrNumber);
  //   arrNumber.sort((a,b) => a-b)
  console.timeEnd("1");
})();

// const arr = new Array(10)
// arr.fill(Math.floor(Math.random()*100))
// console.log(arr)
