// math.js

export function add(a, b) {
  return a + b
}

export function sub(a, b) {
  return a - b
}

// CJS
// module.exports = {
//   add,
//   sub,
// }

// ES
// export { add, sub }
export default function multifly(a, b) {
  return a * b
}