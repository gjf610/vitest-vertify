import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'
import { login, loginV2, getTip } from "./login";
import { cxrLogin } from 'cxr';

// stub 间接输入
vi.mock("cxr", () => {
  return {
    // cxrLogin: vi.fn().mockReturnValue(true)
    cxrLogin: vi.fn(() => true)
  }
})
describe('login', () => {
  it('should called login function from cxr', () => {
    login("gjf", '2333333')


    expect(cxrLogin).toBeCalled()
    // expect(cxrLogin).toBeCalledWith("gjf", "2333333")
    // expect(cxrLogin).toBeCalledTimes(1)
  })
  it('V2', () => {
    loginV2("gjf", "2333333")

    expect(cxrLogin).toBeCalled()
    expect(getTip()).toBe("登录成功啦")
  })
})