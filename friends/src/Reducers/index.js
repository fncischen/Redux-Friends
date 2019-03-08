import {} from "../actions";

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
};

export default friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN:
            return {}
        case SIGN_OUT:
            return {}
        case FETCHING_DATA:
            return {}
        case DELETE_FRIEND:
            return {}
        case ADD_FRIEND:
            return {}
        default:
            return state; 
    }
}