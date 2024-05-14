// Sum numbers from 1 to 10.
let n = 1;
let sum = 0;

// the signal > is not correct it should be n <= 10 
while (n > 10) {
  console.log("######## N:" , n)
  sum += n;
  n += 1;
}

console.log("The sum of the numbers from 1-10 is", sum)
