import axios from "axios";
export const API = axios.create({ baseURL: "http://localhost:1337" });
const API_TOKEN =
  "360745c78fce7859ef20d3743df21f988021cb8ed040886ce587f0a130b6a3daa17bd324a5a45307f106fddcf33d1948e0ec4fa8188797848263f1743bdba0cdd534b0704f0652dd45af0dd03e044278a7b04cf19e45c651d054acbd98a8dd70b038306ed0bfb0504b3d484da3270b290df03ebb0e35acf214fe770423d03ee7";
API.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${API_TOKEN}`;
});
