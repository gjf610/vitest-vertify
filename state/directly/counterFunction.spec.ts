import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'
import { getCount, increment, reset } from "./counterFunction";

describe('counter function', () => {
  afterEach(() => {
    reset()
  })
  it('increment', () => {
    increment()

    expect(getCount()).toBe(1)

  })
})