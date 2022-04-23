import http from '@/api/instance';

export default {
  apiPackagesSearchList: (data) => http.get('/search', {
    params: data,
  }),
};
