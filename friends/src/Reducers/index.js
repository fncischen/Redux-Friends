import {} from "../actions";

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    addedFriend: false,
    updatingFriend: false,
    error: null
};

export default friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_DATA:
            return {... state, fetchingFriends: true, error: null}
        case SIGN_IN:
            return {... state, friends: action.friends, loggingIn: true}
        case SIGN_OUT:
            return {... state, loggingIn: false}
        case DELETE_FRIEND:
            return {... state, friends: action.friends}
        case ADD_FRIEND:
            return {... state, friends: action.friends}
        default:
            return state; 
    }
}