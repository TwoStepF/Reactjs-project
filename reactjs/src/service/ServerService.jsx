import axiosClient from "./axiosClient"
const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  };

const ServerService = {
    getAllServer() {
        const url = '/server'
        return axiosClient.get(url, config)
    },
    createServer(name, address, password) {
        const url = '/server'
        return axiosClient.post(url, {
            name,
            password,
            address
        }, config)
    },
    updateServer(id, name, address) {
        const url = '/server/' + id
        return axiosClient.put(url, {
            id,
            name,
            address
        }, config)
    },
    deleteServer(params) {
        const url = '/server/' + params
        return axiosClient.delete(url, config)
    },
    getByKey(key){
        const url = '/server/search?key=' + key
        return axiosClient.get(url, config)
    }
}

export default ServerService