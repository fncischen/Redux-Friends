import axios from 'axios';

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT ="SIGN_OUT";
export const FETCHING_DATA = "FETCHING_DATA";

export const DELETE_FRIEND = "DELETE_FRIEND";
export const ADD_FRIEND = "ADD_FRIEND";

// two seperate action generators

// configure authorization of sign in. // intermediate step
// since axios will automatically check if the authorization token 
// equals the token in the API for each get method, we are fine :)

const authorizeSignIn = () => {
    const token = localStorage.getItem('userToken');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};

// an action for signing in // which we use to return a token 
// that we then use for logging in 
export const login = (username, password) => {
    axios.put("/api/login", {username, password})
        .then(res => {token: res.data.payload})
        .catch(err => console.log(err));
}

// use the token that has been authenticated by
// authorize signIn <--> I call this a mini action
export const fetchFriends = {
    authorizeSignIn().get("/api/friends")
        .then(res => {friends: res})
        .catch(err => console.log(err))
}

export const addedFriends = (an_addedFriend) => {

    axios.put("/api/friends", {
        name: an_addedFriend.name,
        age: an_addedFriend.age,
        email: an_addedFriend.email
    })
    .then(res => {friends: res})
    .catch(err => console.log(err))
}

export const deletedFriends = (id) => {

    axios.delete(`/api/friends:${id}`)
        .then(res => {friends: res})
        .catch( err => console.log(err));

}

export const updateFriend = (id) => {

    axios.put(`/api/friends:${id}`, {       
        age: an_addedFriend.age,
        email: an_addedFriend.email})
        .then(res => {friends: res})
        .catch(err => console.log(err));

}