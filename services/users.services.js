import HTTPClient from './http.services'

class UsersServices {
    getAllUsers() {
        return new Promise((resolve,reject) => {
            HTTPClient.get("/users")
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        })
    }
}

export default new UsersServices();