import Axios from 'axios';

const token = localStorage.getItem('auth');
const parsedToken = token ? JSON.parse(token).token : null;
const path = 'http://localhost:3000/api/';
export const get = urlInput => {
  const url = `${path}${urlInput}`;
  return Axios.get(url).then(response => {
    return response.data.data;
  });
};
const postData = (url = ``, data = {}) =>
  Axios({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${parsedToken}`
    }
  });
const putData = (url = ``, data = {}) =>
  Axios({
    method: 'put',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${parsedToken}`
    }
  });
const deleteData = (url = ``, data = {}) =>
  Axios({
    method: 'delete',
    url,
    data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${parsedToken}`
    }
  });

export const post = async (urlInput, req) => {
  try {
    const url = `${path}${urlInput}`;
    const response = await postData(url, req);
    return response.data.data;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};
export const del = async (urlInput, req) => {
  const url = `${path}${urlInput}`;
  try {
    const response = await deleteData(url, req);
    return response.data.data;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};
export const put = async (urlInput, req) => {
  const url = `${path}${urlInput}`;
  try {
    const response = await putData(url, req);
    return response.data.data;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
};
