import axios from 'axios';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://bored-api.appbrewery.com/';

export const getRandomActivity = async (type = '') => {
  try {
    let url;
    if (type) {
    
      url = `${BASE_URL}filter?type=${type}`;
    } else {
    
      url = `${BASE_URL}random`;
    }

    console.log(`Requesting from URL: ${url}`); 
    const response = await axios.get(url);
    console.log('Response data:', response.data);
    return Array.isArray(response.data) ? response.data[0] : response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error('Error 429: Too many requests. Please slow down.');
    } else {
      console.error('Error al obtener los datos de la API:', error);
    }
    return null;
  }
};


