import Axios from 'axios';

const path = 'http://localhost:3000/api/';
export const get = urlInput => {
  const url = `${path}${urlInput}`;
  return Axios.get(url).then(response => {
    console.log(response);
    return response.data.data;
  });
};
const postData = (url = ``, data = {}) =>
  Axios({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  });
const putData = (url = ``, data = {}) =>
  Axios({
    method: 'put',
    url,
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  });
const deleteData = (url = ``, data = {}) =>
  Axios({
    method: 'delete',
    url,
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  });

export const post = (urlInput, req) => {
  const url = `${path}${urlInput}`;
  return postData(url, req);
};
export const del = (urlInput, req) => {
  const url = `${path}${urlInput}`;
  return deleteData(url, req);
};
export const put = (urlInput, req) => {
  const url = `${path}${urlInput}`;
  return putData(url, req);
};
