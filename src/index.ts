export function parseIntegerRange(input: string, limit = 10000): number[] {
  if (typeof input !== 'string') throw new TypeError('Range must be text');
  if (!Number.isSafeInteger(limit) || limit < 1 || limit > 100000)
    throw new RangeError('Invalid expansion limit');
  if (!input.trim()) throw new RangeError('Range cannot be empty');
  const result: number[] = [];
  for (const part of input.split(',')) {
    const match = /^(\d+)\s*(?:-\s*(\d+))?$/.exec(part.trim());
    if (!match) throw new RangeError('Invalid range token');
    const start = Number(match[1]),
      end = Number(match[2] ?? match[1]);
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || end < start)
      throw new RangeError('Invalid range bounds');
    if (result.length + end - start + 1 > limit) throw new RangeError('Expansion limit exceeded');
    for (let n = start; n <= end; n++) result.push(n);
  }
  if (new Set(result).size !== result.length)
    throw new RangeError('Overlapping values are not allowed');
  return result;
}
