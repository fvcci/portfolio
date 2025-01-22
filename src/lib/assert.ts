export default function assert(
  condition: unknown,
  message = "",
): asserts condition {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  if (!condition) throw Error(`Assert failed ${condition}: ${message}`);
}
