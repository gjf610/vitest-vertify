import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'
import { UserService } from './UserService'
import { Database } from "./database";

describe('UserService', () => {
  it('should create user', () => {
    const database = new Database()
    const userService = new UserService(database)

    const user = userService.createUser("gjf")
    // expect(database.getUser(user.id)?.name).toBe("gjf")
    expect(userService.findUser(user.id)?.name).toBe("gjf")
  })
})
