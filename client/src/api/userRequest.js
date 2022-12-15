import axios from "axios";

export const getUser = (id) => axios.get(`/api/users/${id}`)