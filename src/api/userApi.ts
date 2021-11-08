import axiosClient from "./axiosClient";

const userApi = {
    login(data: any) {
        const endPoint = "";
        return axiosClient.post(endPoint, data)
    }
}