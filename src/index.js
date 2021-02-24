exports.min = function min (array) {
  if (array == undefined || array.length < 1) return 0;
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (array == undefined || array.length < 1) return 0;
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (array == undefined || array.length < 1) return 0;
  res = 0;
  array.forEach(el => res += el);
  return res / array.length;
}
