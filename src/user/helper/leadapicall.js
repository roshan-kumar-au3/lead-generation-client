import {
    API
} from "../../backend";
import axios from 'axios';

//createlead
export const createLead = (lead, userId) => {
    return axios
        .post(`${API}/create/lead/${userId}`, lead)
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((err) => console.log(err));
};

//getAllleads
export const getAllLeads = () => {
    return axios
        .get(`${API}/leads`)
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((err) => console.log(err));
};