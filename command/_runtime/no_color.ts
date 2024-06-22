export function getNoColor(): boolean {
  // deno-lint-ignore no-explicit-any
  const { Deno, process } = globalThis as any;

  if (Deno) {
    return Deno.noColor;
  } else if (process) {
    return process?.env.NO_COLOR === "1" ||
      process?.env.NODE_DISABLE_COLORS === "1";
  }

  throw new Error("unsupported runtime");
}
