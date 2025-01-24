// Custom Error
class LoginError extends Error {
    username

    constructor(message, username) {
        super(message)
        this.username = username
    }
}


const login = (username, password) => {
    expectedUsername = "johnDoe"
    expectedPassword = "123"

    if (expectedUsername != username || expectedPassword != password) {
        throw new LoginError("Invalid username or password")
    }
}

try {
    login("john", "123456")
} catch (error) {
    console.log(error)
}
