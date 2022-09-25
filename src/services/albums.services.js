import {axiosInstance} from "./axios.service";
import {urls} from "../configs";

const albumsServices = {
    getAll: () => axiosInstance.get(urls.albums)
};

export {albumsServices}