function flip(n) {
  return 1 ^ n;
}

function sign(n) {
  return flip((n >> 31) & 1);
}

function getMax1(a, b) {
  let c = a - b;
  let scA = sign(c);
  let scB = flip(scA);
  return a * scA + b * scB;
}

function getMax2(a, b) {
  let c = a - b;
  let sa = sign(a);
  let sb = sign(b);
  let sc = sign(c);
  let difSab = sa ^ sb;
  let sameSab = flip(difSab);
  let returnA = difSab * sa + sameSab * sc;
  let returnB = flip(returnA);
  return a * returnA + b * returnB;
}

function rightOne(a) {
  return a & (~a + 1);
}
function is2power(n) {
  return (n & (n - 1)) == 0;
}

function is4power(n) {}

function test() {
  // console.log(flip(1));
  // console.log(flip(0));

  // console.log(`------------`);
  // console.log(sign(113));
  // console.log(getMax1(3, 4));
  // console.log(getMax1(-3, -4));

  // console.log(`------------`);
  // console.log(parseInt(12).toString(2));
  // console.log(parseInt(rightOne(12)).toString(2));

  console.log(is2power(4));
  console.log(parseInt(0x55555555, 8).toString(2));
}

test();

function add(a, b) {
  let sum = a;
  while (b != 0) {
    sum = a ^ b;
    b = (a & b) << 1;
    a = sum;
  }
  return sum;
}

function negNum()
