import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const baseURL = `https://simple-blog-api.crew.red`;

export function init() {
    axios.defaults.baseURL = baseURL;
    axios.defaults.withCredentials = true;
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            console.log("error is: ", error);
            return {
                success: false,
                err: error,
                message:
                    error.response && error.response.data
                        ? error.response.data.message
                        : error.response && error.response.statusText
                        ? error.response.statusText
                        : "Unexpected error",
            };
        }
    );
}

const Request = async (config: AxiosRequestConfig): Promise<any> => {
    if (config.url && config.url.indexOf(baseURL) === -1) {
        config.url = baseURL + config.url;
    }
    try {
        const res: AxiosResponse = await axios(config);
        return res;
    } catch (e) {
        console.log("error in Request is: ", e);
    }
};

export default Request;
