import * as api from '@lp-labs/integer-range-parser';
import { parseIntegerRange } from '@lp-labs/integer-range-parser';
console.log(parseIntegerRange('2,4-6'));
// @ts-expect-error invalid argument must be rejected by declarations
api.parseIntegerRange(42);
