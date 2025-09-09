import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState('login');  // login or otp
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    otp: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const sendOtp = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('123456'); // mock otp
      }, 1500);
    });
  };


  const verifyOtpApi = (otp) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (otp === '123456') {
          resolve(true);
        } else {
          reject(new Error('Invalid OTP'));
        }
      }, 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email && !formData.phone) {
      alert('Please enter email or mobile number');
      return;
    }

    setLoading(true);

    try {
      await sendOtp();
      alert('OTP sent! Please check your email or phone.');
      setStep('otp');
    } catch (error) {
      alert('Failed to send OTP. Try again.');
    }

    setLoading(false);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (formData.otp.trim().length === 0) {
      alert('Please enter OTP');
      return;
    }

    setLoading(true);

    try {
      await verifyOtpApi(formData.otp.trim());
      alert('OTP verified! Redirecting to Home page...');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        {step === 'login' ? (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Login Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                disabled={loading}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                disabled={loading}
              />

              <p className="text-center text-gray-500">Or</p>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                disabled={loading}
              />

              <button
                type="submit"
                className={`w-full py-2 rounded-md text-white ${
                  loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
                disabled={loading}
              >
                {loading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Enter OTP</h1>
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter OTP"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                disabled={loading}
              />
              <button
                type="submit"
                className={`w-full py-2 rounded-md text-white ${
                  loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                }`}
                disabled={loading}
              >
                {loading ? 'Verifying OTP...' : 'Verify OTP'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

//
