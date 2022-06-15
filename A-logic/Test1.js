let A1 = [1, 2, 'a'];
let A2 = [1, 3, 'b'];
function diffArray(A1, A2) {
  return A1.concat(A2).filter(function (val) {
    if (!(A1.includes(val) && A2.includes(val))) return val;
  });
}
console.log(diffArray([1, 2, 'a'], [1, 3, 'b']));
