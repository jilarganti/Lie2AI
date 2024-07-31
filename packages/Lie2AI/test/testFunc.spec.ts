import { expect, test } from "vitest"
import { testFunc } from "@lie2ai"

test("adds 2 + 2 to equal 4", () => {
  expect(testFunc(2, 2)).toBe(4)
})
