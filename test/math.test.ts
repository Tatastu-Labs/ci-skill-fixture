import { expect, test } from "vitest"
import { add, mul } from "../src/math"
test("add", () => expect(add(2, 3)).toBe(5))
test("mul", () => expect(mul(2, 3)).toBe(6))
