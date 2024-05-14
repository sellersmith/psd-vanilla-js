export function _toBase64(
  imagePixelData: Uint8ClampedArray,
  _pixelData: Uint8ClampedArray
): void {
  var i: i32, j: i32, len: i32, pixel: i32, ref: Uint8ClampedArray;

  ref = _pixelData;
  for (i = j = 0, len = ref.length; j < len; i = ++j) {
    pixel = ref[i];
    imagePixelData[i] = pixel;
  }
}
