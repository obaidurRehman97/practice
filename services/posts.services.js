import HTTPClient from "./http.services";

class PostsServices {
    getAllPosts(){
        return new Promise((resolve,reject) => {
            HTTPClient.get("/posts")
                .then((response) => resolve({response: response.data}))
                .catch((error) => reject(error))
        })
    }
}

export default new PostsServices();