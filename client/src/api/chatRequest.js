import axios from "axios";

export const userChats = (id) => axios.get(`/api/chats/${id}`)

