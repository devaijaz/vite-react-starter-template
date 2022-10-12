export function sumFn(...args: number[]): number {
  return args.reduce((acc, number) => acc + number, 0);
}
