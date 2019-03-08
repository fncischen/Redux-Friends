import axios from 'axios';

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT ="SIGN_OUT";
export const FETCHING_DATA = "FETCHING_DATA";

export const DELETE_FRIEND = "DELETE_FRIEND";
export const ADD_FRIEND = "ADD_FRIEND";

// two seperate action generators

export function authorizeSignin() {
    const token = localStorage.getItem('userToken');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};


// generate 