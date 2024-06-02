/* eslint-disable */
let IDX = 36,
  HEX = "";
while (IDX--) {
  HEX += IDX.toString(36);
}

export function uid(len) {
  let str = "",
    num = len || 11;
  while (num--) {
    str += HEX[(Math.random() * 36) | 0];
  }
  return str;
}

let SIZE = 4096,
  HEX2 = [],
  IDX2 = 0,
  BUFFER;

for (; IDX2 < 256; IDX2++) {
  HEX2[IDX2] = (IDX2 + 256).toString(16).substring(1);
}

export function uuid() {
  if (!BUFFER || IDX2 + 16 > SIZE) {
    BUFFER = crypto.getRandomValues(new Uint8Array(SIZE));
    IDX2 = 0;
  }

  let i = 0,
    tmp,
    out = "";
  for (; i < 16; i++) {
    tmp = BUFFER[i + IDX2];
    if (i == 6) {
      out += HEX2[(tmp & 15) | 64];
    } else if (i == 8) {
      out += HEX2[(tmp & 63) | 128];
    } else {
      out += HEX2[tmp];
    }

    if (i & 1 && i > 1 && i < 11) {
      out += "-";
    }
  }

  IDX2++;
  return out;
}
const validationRegex =
  /^[A-Za-z0-9]{8}-[A-Za-z0-9]{4}-4[A-Za-z0-9]{3}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12}$/;
export const validateUUID = (id) => {
  return typeof id === "string" && validationRegex.test(id);
};
