import { login } from "./login"

describe('login', () => {

    const mockEmail = 'iugmali@dio.bank'
    const mockPassword = '123456'

    it('should return true when email and password are valid', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('should return false when email/password is invalid', async() => {
        const response = await login('email@invalido.com', mockPassword)
        expect(response).toBeFalsy()
        const response = await login(mockEmail, '1234')
        expect(response).toBeFalsy()
    })
})