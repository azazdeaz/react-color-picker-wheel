export default function radDiff(a, b) {
  const {PI} = Math
  let diff = b - a
  diff = ((diff + PI) % PI*2) - PI
  return diff
}
