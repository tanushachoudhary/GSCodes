
export const SERVICE_URL = {
    /* AUTHENTICATION SERVICES */
    /* --------------------------------------------- */
    userSignup : {url:"/signup" , method: 'POST'},
    userLogin : {url: "/login", method: 'POST'},
    userLogout : {url: "/logout", method: 'DELETE', query:true, params: true},

    /* ADMIN FUNCTIONS PERTAINING TO QUESTIONS */
    /* --------------------------------------------- */
    adminAddQuestion : {url: "/addNewQuestion", method: "POST"},
    getAllProblems : {url:"/getProblems", method: "GET"},
    getThisProblem : {url: "/problem/:id", method: "GET", params: true},
    updateThisProblem : {url: "/edit-problem/:id", method: "PUT", params: true},
    deleteProblem: {url: "/deleteProblem/:id", method: "DELETE", params: true},

    /* USER FUNCTIONS TO POSTS */
    /* --------------------------------------------- */
    getPosts: { url: "/api/posts", method: "GET" },
    createPosts: { url: "/api/posts", method: "POST" },
    updatePosts: { url: "/api/posts/update/:id", method: "PUT", params: true },
    deletePosts: { url: "/api/posts/delete", method: "DELETE" , query: true},
}

export const API_NOTIF_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded, Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    responseFailure: {
        title: "Error",
        message: "An error occured while fetching response from the server. Please try again."
    },
    requestFailure: {
        title: "Error",
        message: "An error occured while parsing request data"
    },
    networkError: {
        title: "Error",
        message: "Unable to connect with the server. Please check internet connectivity and try again later"
    }
}