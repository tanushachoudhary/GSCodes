import axios from 'axios';
import { API_NOTIF_MESSAGES, SERVICE_URL } from '../constants/config';
import { getAccessToken, getType } from '../utils/commonUtils.js';
const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {"Accept": "application/json, multipart/form-data"}
  });


//interceptors are what they literally mean
//they intercept and let one modify requests before they are sent and responses before they come
// useful for tasks such as : authentication tokens,error handling
axiosInstance.interceptors.request.use(
    function (config) {
        if(config.TYPE.params){
            config.params = config.TYPE.params;
        }else if(config.TYPE.query){
            config.url = config.url + '/' + config.TYPE.query;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
});


axiosInstance.interceptors.response.use(
    function(response){
        return processResponse(response);
    }, function(error){
        return Promise.reject(processError(error));
    }
)

function processResponse(response){
    if(response?.status === 200){
        return {isSuccess: true, data: response.data}
    }else{
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.message,
            code: response?.code
        }
    }
}

function processError(error){
    if(error.response){
        console.log("ERROR IN RESPONSE(response comes but has some error)", error.toJSON());
        return{
            isError: true,
            msg: API_NOTIF_MESSAGES.responseFailure,
            code: error.response.status
        }
    }else if(error.request){
        console.log("ERROR IN REQUEST", error.toJSON());
        return{
            isError: true,
            msg: API_NOTIF_MESSAGES.requestFailure,
            code: "",
        }
    }else{
        console.log("ERROR IN NETWORK", error);
        return{
            isError: true,
            msg: API_NOTIF_MESSAGES.networkError,
            code:""
        }
    }
}

const API = {};

for(const [key, value] of Object.entries(SERVICE_URL)){
    API[key] = (body, showUploadProgress, showDownloadProgress) => {
        return axiosInstance({
            method: value.method,
            url: value.params ? value.url.replace(":id", body) : value.url,
            params: value.method === "GET" ? body : {}, 
            data: value.method !== "GET" && value.method !== "DELETE" ? body : "",//delete method mein body nahi bhejte hai apan
            responseType: value.responseType,
            headers: {
                authorization: getAccessToken()
            },
            TYPE: getType(value, body),
            onUploadProgress: function (progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100)/progressEvent.total )
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: function (progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100)/progressEvent.total )
                    showDownloadProgress(percentageCompleted);
                }
            },
        })
    }
}

export {API};