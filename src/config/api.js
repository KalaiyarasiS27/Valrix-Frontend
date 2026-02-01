// API Configuration
const API_BASE_URL = 'http://localhost:5000';

// API endpoints
export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  SIGNUP: `${API_BASE_URL}/api/auth/register`,
  LOGOUT: `${API_BASE_URL}/api/auth/logout`,
  USER_PROFILE: `${API_BASE_URL}/api/user/profile`,
};

// Helper function to make API requests
export const apiRequest = async (url, options = {}) => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  // Get token from localStorage if it exists
  const token = localStorage.getItem('token');
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// Auth API functions
export const authAPI = {
  login: async (email, password) => {
    return apiRequest(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  register: async (name, email, password) => {
    return apiRequest(API_ENDPOINTS.SIGNUP, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  },

  logout: async () => {
    return apiRequest(API_ENDPOINTS.LOGOUT, {
      method: 'POST',
    });
  },
};

export default API_BASE_URL;
