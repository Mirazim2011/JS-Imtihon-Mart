// 1-vazifa

function ortacha(a, b, c) {
  if ((a <= b && a >= c) || (a >= b && a <= c)) {
    return a;
  } else if ((b <= c && b >= a) || (b >= a && b <= c)) {
    return b;
  } else return c;
}
console.log(ortacha(5, 90, 24));
console.log(ortacha(-67, 90, 34));
console.log(ortacha(4, 4, 5));
console.log(ortacha(5, 5, 4));
console.log(ortacha(6, 6, 6));

// 2-vazifa

function kattaKichik(array) {
  let musbat = 0;
  let manfiy = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      musbat++;
    }
    if (array[i] < 0) {
      manfiy++;
    }
  }
  return musbat + " ta musbat" + "va " + manfiy + " ta manfiy ";
}
console.log(kattaKichik([3, -9, 2, 1]));
console.log(kattaKichik([-5, -7, -1, 0, 8, 9, 23]));
console.log(kattaKichik([2, 6, 8, -1]));
console.log(kattaKichik([5, 7, 9, 8]));
console.log(kattaKichik([9, 8, 4, 0, -1, -2, 0, 5]));

// 3-vazifa

function qoshgich(pdp) {
  let sum = 0;
  for (let i = 0; i < pdp.length; i++) {
    if (pdp[i] < 0) {
      sum += pdp[i];
    }
  }
  return sum;
}
console.log(qoshgich([-1, -5, 6, -4, 8]));
console.log(qoshgich([6, -7, -9, 1, 0]));
console.log(qoshgich([4, 76, 43, 56, 78]));

// 4-vazifa

function kattasi(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(kattasi([1, 2, 3, 4, 5]));
console.log(kattasi([7, 9, 14, -5, 6]));
console.log(kattasi([8, -9, 45, 45, 23]));
console.log(kattasi([3, 3, 3]));
