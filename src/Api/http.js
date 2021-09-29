import axios from 'axios';

const API_KEY = process.env.REACT_APP_DB_API_KEY;
export const url = process.env.REACT_APP_NFDDB_URL;

const fetchRequest = async (way) => {
  const res = await axios.get(`${url}${way}`, {
    headers: {
      'X-Api-Factory-Application-Id': API_KEY,
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'text-html',
    },
  });
  return res.data;
};

export const getCityList = async () => {
  const res = await fetchRequest('/db/city');
  return res.data;
};

export const getPointListByCityId = async (cityId) => {
  const res = await fetchRequest(`/db/point?cityId=${cityId}`);
  return res.data;
};

export const getCarList = async () => {
  const res = await fetchRequest('/db/car');
  return res.data;
};

export const getCarsCategory = async () => {
  const res = await fetchRequest('/db/category');
  return res.data;
};

export const getCarsListByCategory = async (catId) => {
  const res = await fetchRequest(`/db/car?categoryId=${catId}`);
  return res.data;
};

export const getRateType = async () => {
  const res = await fetchRequest('/db/rateType');
  return res.data;
};

export const getRate = async () => {
  const res = await fetchRequest('/db/rate');
  return res.data;
};

export const getOrderStatus = async () => {
  const res = await fetchRequest('/db/orderStatus');
  return res.data;
};
export const getOrderById = async (orderId) => {
  const res = await fetchRequest(`/db/order/${orderId}`);
  return res.data;
};

// const fetchPostRes = async (way, data) => {
//   const res = await axios.post(`${url}${way}`, {
//     data,
//     headers: {
//       'X-Api-Factory-Application-Id': API_KEY,
//       'Access-Control-Allow-Origin': '*',
//       'Content-type': 'application/json',
//     },
//   });
//   return res.data;
// };
// export const postNewOrder = async (data) => {
//   const res = await fetchPostRes('/db/order', data);
//   return res.data;
// };

export default fetchRequest;
