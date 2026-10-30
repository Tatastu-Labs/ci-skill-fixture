import { describe, expect, test } from "vitest"
import { slugify } from "../src/slug"
describe("slugify", () => {
  test("lowercases and joins words", () => expect(slugify("Hello World")).toBe("hello-world"))
  test("trims separators", () => expect(slugify("  --A b--  ")).toBe("a-b"))
})
