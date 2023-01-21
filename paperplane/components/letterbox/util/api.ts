import axios from 'axios';
import { publicApi } from '../../../util/api';

export async function getReceivedPost(page: number) {
  const res = await publicApi.get(`/post/received?page=${page}`);
  console.log(res);
}
