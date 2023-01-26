import { publicApi } from '../../../util/api';
import { letter } from './types';

export async function getReceivedPost(page: number) {
  try {
    const res = await publicApi.get(`/post/received?page=${page}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSentPost(page: number) {
  try {
    const res = await publicApi.get(`/post/sent/random?page=${page}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getReadedPosts(page: number) {
  try {
    const res = await publicApi.get(`/post/received/read?page=${page}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getGroupSentPost(page: number) {
  try {
    const res = await publicApi.get(`/post/sent/group?page=${page}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getLikedPost(page: number) {
  try {
    const res = await publicApi.get(`/post/liked?page=${page}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
