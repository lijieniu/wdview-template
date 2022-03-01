// @ts-nocheck
import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axois对返回内容做拦截
axios.interceptors.response.use((response) => {
	if (response.status === 200 || response.status === 201) {
		return Promise.resolve(response.data);
	}
	return Promise.reject(response);
});
export default axios;
