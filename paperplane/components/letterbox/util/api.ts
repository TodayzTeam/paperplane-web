import { publicApi } from '../../../util/api';
import { letter } from './types';

export async function getReceivedPost(page: number) {
  const res = await publicApi.get(`/post/received?page=${page}`);
  return res.data;
}

export async function getSentPost(page: number) {
  const res = await publicApi.get(`/post/sent/random?page=${page}`);
  return res.data;
}

export async function getLikedPost(page: number) {
  const res = await publicApi.get(`/post/sent?page=${page}`);
  return res.data;
}

export async function getReadedPosts(page: number) {
  const res = await publicApi.get(`/post/received/read?page=${page}`);

  return res.data;
}

export async function getGroupSentPost(page: number) {
  const res = await publicApi.get(`/post/sent/group?page=${page}`);
  return res.data;
}
