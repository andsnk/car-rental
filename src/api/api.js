import axios from 'axios';
axios.defaults.baseURL = 'https://65b96003b71048505a8ac506.mockapi.io/';

export const getCars = async () => {
  const { data } = await axios.get('adverts');
  console.log(data, 'cars')
  return data;
};
