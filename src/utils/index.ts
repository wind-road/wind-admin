// 生成随机数
export function minMaxNum(minimum: number, maximum: number) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
// 生成id
export function createId() {
  return Date.now() + minMaxNum(1000, 9999);
}