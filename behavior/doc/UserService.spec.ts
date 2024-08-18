import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'
import { UserService } from './UserService'
import { Database } from "./database";

describe('UserService', () => {
  it('should create user', () => {

    Database.prototype.addUser = vi.fn()
    const database = new Database()
    // vi.spyOn(database, "addUser")
    // console.log(database.addUser)
    const userService = new UserService(database)

    userService.createUser("gjf")

    expect(database.addUser).toBeCalled()
  })
})
