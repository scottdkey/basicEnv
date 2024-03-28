import { describe, it, beforeEach } from "node:test";
import assert from "node:assert"
// import { test } from "node:test"
import { randomUUID } from "node:crypto";
import { getConfig } from "./config.js";


describe("index tests", () => {
  let testId = "this is a bad request"
  beforeEach(() => {
    //get testId
    testId = randomUUID()
  })
  describe("baseline tests", () => {
    it("should be 0", () => {
      assert.equal(0, 0)
      console.debug("testId", testId)
    })
    it("should have valid config", () => {
      const config = getConfig()
      assert.equal(config.port, 3000)


    })
  })
})
