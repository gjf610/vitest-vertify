import { Counter } from "./counter";
import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'

describe('Counter', () => {
  it('increment', () => {
    const counter = new Counter()

    counter.increment()

    expect(counter.getCount()).toBe(1)
  })
})

