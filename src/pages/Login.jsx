import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../config/api';
import '../styles/pageStyles/Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authAPI.login(formData.email, formData.password);
      
      // Store token in localStorage
      if (response.token) {
        localStorage.setItem('token', response.token);
      }
      
      // Store user data
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user));
      }

      // Redirect to home page
      navigate('/profile');
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <div className="form-header">
          <div className="logo">
            <svg className="logo-icon" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd" />
            </svg>
            <h1 className="logo-text">Valrix</h1>
          </div>
        </div>

        <div className="form-content">
          <div className="form-intro">
            <span className="badge">WELCOME BACK</span>
            <h2 className="form-title">Log in to your account.</h2>
            <p className="form-subtitle">Continue trading and building community.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {error && (
              <div className="error-message">
                <span className="material-symbols-outlined">error</span>
                <span>{error}</span>
              </div>
            )}
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                className="form-input" 
                placeholder="example@gmail.com" 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="password-wrapper">
                <input 
                  className="form-input" 
                  placeholder="Enter your password" 
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <button 
                  className="password-toggle" 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input 
                  type="checkbox" 
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={loading}
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button className="submit-button" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span>Logging in...</span>
                  <span className="material-symbols-outlined spinner">progress_activity</span>
                </>
              ) : (
                <>
                  <span>Log in</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <div className="signup-link">
            <p>
              New to Valrix?{' '}
              <Link to="/signup">Join the loop</Link>
            </p>
          </div>
        </div>

        <div className="trust-badges">
          <div className="badge-item">
            <span className="material-symbols-outlined">verified_user</span>
            <span>Secure &amp; Community Verified</span>
          </div>
          <div className="badge-item">
            <span className="material-symbols-outlined">lock</span>
            <span>Encrypted Data</span>
          </div>
        </div>
      </div>

      <div className="login-illustration-section">
        <div className="illustration-content">
          <div className="circle-illustration">
            <div className="circle-border"></div>
            <svg className="circle-dots" viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="none" r="48" stroke="currentColor" strokeDasharray="4 4" strokeWidth="0.5" />
            </svg>
            <div className="circle-center">
              <div className="icon-center">
                <div className="icon-top">
                  <span className="material-symbols-outlined">package_2</span>
                </div>
                <div className="icon-left">
                  <span className="material-symbols-outlined">eco</span>
                </div>
                <div className="icon-right">
                  <span className="material-symbols-outlined">handyman</span>
                </div>
                <span className="material-symbols-outlined icon-main">sync_alt</span>
              </div>
            </div>
          </div>

          <h3 className="illustration-title">Welcome back to the loop.</h3>
          <p className="illustration-subtitle">
            Continue exchanging goods, building connections, and strengthening your community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
