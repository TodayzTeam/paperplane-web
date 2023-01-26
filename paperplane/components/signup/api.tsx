import { Api, publicApi } from '../../util/api';

// 유저 관심사 목록 등록 api
export const setUserInterest = async (keywordArr: any[]) => {
  const formData = new FormData();
  formData.append('keyword', JSON.stringify(keywordArr));

  try {
    const res = await Api.post('/user/interest', formData);
    if (res.status === 200) return true;
  } catch (error) {
    console.log(error);
  }
};

// 관심사 키워드 검색
export const searchInterest = async (keyword: string) => {
  if (!keyword.length) return [];
  try {
    const res = await publicApi.get(`/interest/search/${keyword}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

// 추천 관심사
export const getRecommendInterest = async () => {
  try {
    const res = await publicApi.get('/interest/recommend');
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
