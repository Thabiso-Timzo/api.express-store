import axios from "axios";

export const utiliseChat = (id) => axios.get(`/api/chats/${id}`)
