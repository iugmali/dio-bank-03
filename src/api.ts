const conta = {
    email: 'iugmali@dio.bank',
    password: '123456',
    name: 'Guilherme Almeida',
    balance: 3000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
