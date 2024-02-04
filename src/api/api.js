// import axios from 'axios';
// axios.defaults.baseURL = 'https://65b96003b71048505a8ac506.mockapi.io/';

// export const getCars = async () => {
//   const { data } = await axios.get('adverts');
//   console.log(data, 'cars')
//   return data;
// };

import axios from 'axios';

axios.defaults.baseURL = 'https://65b96003b71048505a8ac506.mockapi.io/';

export const getCars = async (page = 1, limit = 12) => {
  const response = await axios.get('adverts', {
    params: {
      page,
      limit,
    },
  });

  console.log(response.data, 'cars');
  return response.data;
};

export const getFilterCars = async (data) =>{
  const make = data.make;
  const res = await axios.get('adverts', {
    params: {
      make,
    },
  });
  return res.data;
}