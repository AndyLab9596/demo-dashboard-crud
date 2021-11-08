import axiosClient from "./axiosClient";

const userApi = {
    login(data: any) {
        const endPoint = "";
        return axiosClient.post(endPoint, data)
    },

    getAll() {
        const endPoint = "/posts"
        return axiosClient.get(endPoint)
    }
}

export default userApi;