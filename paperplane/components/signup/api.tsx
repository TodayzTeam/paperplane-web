import axios from 'axios';

export const getUserInterest = async () => {
  try {
    const res = await axios.get('/interest/myinterest', {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getRecommedInterest = async () => {
  try {
    const res = await axios.get('/interest/recommend', {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
