import { Config } from '@/configs/config'
import axios from 'axios'

export const login = async (request: LoginRequestApi) => {
  const axiosResponse = await axios.post(Config.API_URL + '/auth/login', request);
  const response: ResponseApi = axiosResponse.data;

  return response;
}

export const register = async (request: RegisterRequestApi) => {
  const axiosResponse = await axios.post(Config.API_URL + '/auth/register', request);
  const response: ResponseApi = axiosResponse.data;

  return response;
}

export const getPosts = async (params: any) => {
  var url = Config.API_URL + '/posts?search=true';
  
  if (params && params.topic) {
    url = url.concat(`&topic=${params.topic}`)
  }

  if (params && params.keyword) {
    url = url.concat(`&keyword=${params.keyword}`)
  }

  console.log(url);
  

  const axiosResponse = await axios.get(url);
  const response: ResponseApi = axiosResponse.data;

  if (!response.success) return [];
  
  if (!response.data) return [];

  const rawPosts: Post[] = response.data.posts || [];

  const posts = rawPosts.map(post => {
    post.photo = encodeURI(Config.API_URL.concat(`/uploads/${post.photo}`));

    return post;
  });

  return posts;
}

export const getPostById = async (id: number) => {
  const axiosResponse = await axios.get(Config.API_URL + `/posts/${id}`);
  const response: ResponseApi = axiosResponse.data;

  if (!response.success) return null;
  
  if (!response.data) return null;

  const post: Post = response.data.post || null;
  post.photo = encodeURI(Config.API_URL.concat(`/uploads/${post.photo}`));

  return post;
}

export const addComment = async (request: AddCommentRequest) => {
  const postId = request.post_id;

  const axiosResponse = await axios.post(Config.API_URL + `/posts/${postId}/comments`, request);
  const response: ResponseApi = axiosResponse.data;

  return response;
}

export const addLike = async (request: AddLikeRequest) => {
  const postId = request.post_id;

  const axiosResponse = await axios.post(Config.API_URL + `/posts/${postId}/likes`, request);
  const response: ResponseApi = axiosResponse.data;

  return response;
}

export const getHotTopics = async () => {
  const axiosResponse = await axios.get(Config.API_URL + '/topics/hot');
  const response: ResponseApi = axiosResponse.data;

  if (!response.success) return [];
  
  if (!response.data) return [];

  const topics: Topic[] = response.data.topics || [];

  return topics;
}

export const getBanners = async () => {
  const axiosResponse = await axios.get(Config.API_URL + '/banners');
  const response: ResponseApi = axiosResponse.data;

  if (!response.success) return [];
  
  if (!response.data) return [];

  const banners: Banner[] = response.data.banners || [];

  return banners;
}