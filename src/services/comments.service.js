import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const commentsService ={
    getAll: () => axiosInstance.get(urls.comments)
};

export {commentsService}