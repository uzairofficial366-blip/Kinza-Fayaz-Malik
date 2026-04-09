import axios from 'axios';

const isProd = import.meta.env.MODE === 'production';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || (isProd ? '/api' : 'http://localhost:5000/api'),
});

export const fetchProjects = () => api.get('/projects');
export const fetchTestimonials = () => api.get('/testimonials');
export const submitContact = (data) => api.post('/contact', data);

export default api;
