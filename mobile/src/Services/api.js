import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:56060" /* http://localhost:3333 */
});

export default api;
