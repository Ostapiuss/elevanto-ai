import { API_CONTENT } from '@shared/constants/common';
import { httpClient } from '@utils/http-client';

const { get } = httpClient;

export const blogsApi = {
  getEventLog: () => get(`${API_CONTENT}/blogs`, {}),
};
