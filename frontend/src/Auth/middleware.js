import {axiosRequest} from "../utils/axiosRequest";
import { devUserData } from "./devData";

export const tryLoginUser = (email, password) => {
    return async dispatch => {
        const user = await axiosRequest('http://localhost:8080/userLogin', "POST", {email: email, password: password}, devUserData);
        return user;
    }
};

export const tryCreateUser = (name, email, password) => {
    return async dispatch => {
        const user = await axiosRequest('http://localhost:8080/user', "POST", {name: name, email: email, password: password}, devUserData);
        return user;
    }
};