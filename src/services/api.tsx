import axios from "axios";

const api = {
    getCars: () => axios.get("/api/cars.json")
}

export default api;