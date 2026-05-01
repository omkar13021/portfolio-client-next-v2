// src/redux/slices/blogsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    currentBlog: null,
    loading: false,
    error: null,
    total: 0,
    page: 1,
    pages: 1,
  },
  reducers: {
    fetchBlogsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBlogsSuccess: (state, action) => {
      state.blogs = action.payload.blogs || [];
      state.total = action.payload.total || 0;
      state.page = action.payload.page || 1;
      state.pages = action.payload.pages || 1;
      state.loading = false;
    },
    fetchBlogsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchBlogByIdStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBlogByIdSuccess: (state, action) => {
      state.currentBlog = action.payload;
      state.loading = false;
    },
    fetchBlogByIdFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearCurrentBlog: (state) => {
      state.currentBlog = null;
    },
  },
});

export const { 
  fetchBlogsStart, 
  fetchBlogsSuccess, 
  fetchBlogsFailure,
  fetchBlogByIdStart,
  fetchBlogByIdSuccess,
  fetchBlogByIdFailure,
  clearCurrentBlog
} = blogsSlice.actions;

// Fetch all published blogs with optional filters
export const fetchBlogs = (params = {}) => async (dispatch) => {
  dispatch(fetchBlogsStart());
  try {
    const { page = 1, limit = 10, category, tags, search } = params;
    const queryParams = new URLSearchParams();
    queryParams.append('status', 'published'); // Only fetch published blogs for public
    if (page) queryParams.append('page', page);
    if (limit) queryParams.append('limit', limit);
    if (category) queryParams.append('category', category);
    if (tags) queryParams.append('tags', tags);
    if (search) queryParams.append('search', search);

    const response = await axios.get(`${API_URL}/blogs?${queryParams.toString()}`);
    dispatch(fetchBlogsSuccess(response.data));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    dispatch(fetchBlogsFailure(error.response?.data?.message || 'Failed to fetch blogs'));
  }
};

// Fetch single blog by slug or ID
export const fetchBlogById = (id) => async (dispatch) => {
  dispatch(fetchBlogByIdStart());
  try {
    const response = await axios.get(`${API_URL}/blogs/${id}`);
    dispatch(fetchBlogByIdSuccess(response.data.blog));
  } catch (error) {
    console.error('Error fetching blog:', error);
    dispatch(fetchBlogByIdFailure(error.response?.data?.message || 'Failed to fetch blog'));
  }
};

export default blogsSlice.reducer;
