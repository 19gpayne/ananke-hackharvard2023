import axios from 'axios';

//Interprets API requests based on a given method
export const axiosRequest = (url, method, json, devRes) => {
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    if(method === 'GET') {
        if(json === {}) {
          return axios.get(url, {withCredentials: false}).then(res => {return res.data;})
        } else {
          return axios.get(url, {params: json, withCredentials: false}).then(res => {return res.data;})
        }

    } else if(method === 'POST') {
      return axios.post(url, json, {withCredentials: false}).then(res => {return res.data;})
    } else if(method === 'PUT') {
      return axios.put(url, json, {withCredentials: false}).then(res => {return res.data;})
    } else if(method === 'DELETE') {
      return axios.delete(url, {data: json, withCredentials: false}).then(res => {return res.data;})
    } else {
      return axios.get(url, {withCredentials: false}).then(res => {return res.data;})
    }
};