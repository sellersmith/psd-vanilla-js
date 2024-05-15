export function _toBase64(
  imageData: Uint8ClampedArray,
  ref: Uint8ClampedArray
): Uint8ClampedArray {
  const len: u32 = ref.length;
  for (let i: u32 = 0; i < len; i++) {
    imageData[i] = ref[i];
  }

  return imageData
}
