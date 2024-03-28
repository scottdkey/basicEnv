
import assert from "node:assert"
import { test } from "node:test"

test("some test", (t) => {
  t.diagnostic('diagnostic')
  assert.strictEqual(1, 1)
})

test("second basic test", () => {
  assert.equal(2, 2)
})

test('throws error', () => {
  assert.ifError(() => { throw new Error('') })
})