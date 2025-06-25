import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ratings = [
  {
    label: 'Terrible',
    value: 1,
    emoji: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#FDE68A"/><path d="M9 10c.5-.667 1.5-.667 2 0" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 10c-.5-.667-1.5-.667-2 0" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 16c1.333-1.333 4.667-1.333 6 0" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
    )
  },
  {
    label: 'Bad',
    value: 2,
    emoji: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#FDE68A"/><path d="M9 10c.5-.667 1.5-.667 2 0" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 10c-.5-.667-1.5-.667-2 0" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 16c1.333 0 4.667 0 6 0" stroke="#F59E42" strokeWidth="1.5" strokeLinecap="round"/></svg>
    )
  },
  {
    label: 'Okay',
    value: 3,
    emoji: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#FDE68A"/><path d="M9 10c.5-.667 1.5-.667 2 0" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 10c-.5-.667-1.5-.667-2 0" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 16h8" stroke="#F59E42" strokeWidth="1.5" strokeLinecap="round"/></svg>
    )
  },
  {
    label: 'Good',
    value: 4,
    emoji: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#FDE68A"/><path d="M9 10c.5-.667 1.5-.667 2 0" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 10c-.5-.667-1.5-.667-2 0" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 16c1.333 1.333 4.667 1.333 6 0" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/></svg>
    )
  },
  {
    label: 'Amazing',
    value: 5,
    emoji: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#FDE68A"/><path d="M9 10c.5-.667 1.5-.667 2 0" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 10c-.5-.667-1.5-.667-2 0" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 16c1.333 2 4.667 2 6 0" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9.5" cy="9.5" r="1.5" fill="#EF4444"/><circle cx="14.5" cy="9.5" r="1.5" fill="#EF4444"/></svg>
    )
  }
];

const FeedbackForm = ({ isDark }) => {
  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('other');
  const [submitting, setSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    setSubmitting(true);
    setShowConfirm(false);
    await axios.post('http://localhost:5000/feedback', { rating, message, name, email, category });
    setSubmitting(false);
    setRating(null);
    setMessage('');
    setName('');
    setEmail('');
    setCategory('other');
    toast.success('Successfully submitted your response!');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`max-w-2xl mx-auto p-8 rounded-xl shadow-lg border border-yellow-100
          ${isDark ? 'bg-gray-800 text-white ' : 'bg-white text-white'}`
        }
        style={{ boxShadow: '0 4px 32px 0 rgba(255, 193, 7, 0.10)' }}
        
      >
        <h2 className={`text-2xl font-bold text-center mb-2
          ${isDark ? 'text-white' : 'text-gray-900'}
          `}>Give Feedback</h2>
        <p className="text-center text-gray-600 mb-6">How is your think of the issue search experience within website.</p>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-3
              ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
              `}
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-3
              ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
              `}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <select
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400
              ${isDark? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
              `}
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          >
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
            <option value="suggestion">Suggestion</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex justify-between items-center mb-6 px-2">
          {ratings.map((r) => (
            <button
              type="button"
              key={r.value}
              onClick={() => setRating(r.value)}
              className={`flex flex-col items-center focus:outline-none transition-all ${
                rating === r.value ? 'scale-110' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <span className={`rounded-full p-1 ${rating === r.value ? 'ring-2 ring-yellow-400' : ''}`}>{r.emoji}</span>
              <span className={`mt-2 text-sm font-medium ${rating === r.value ? 'text-yellow-600' : 'text-gray-500'}`}>{r.label}</span>
            </button>
          ))}
        </div>
        <div className="mb-6">
          <label className={`block font-semibold mb-2 
            ${isDark ? 'text-white' : 'text-gray-800'}
            `}>What are the main reasons for your rating?</label>
          <input
            type="text"
            placeholder="Mention a reasons for your rating"
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400
              ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
              `}
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-4 justify-center mt-8">
        <button
          type="submit"
          disabled={submitting || rating === null}
          className={`
            px-8 py-2 rounded-lg font-semibold transition
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-opacity-90
            ${isDark ? 'bg-[#16610E] text-white hover:bg-green-800' : 'bg-gray-500 text-white hover:bg-gray-800'}
          `}
        >
          Submit
        </button>

          <button
            type="button"
            onClick={() => { setRating(null); setMessage(''); setName(''); setEmail(''); setCategory('other'); }}
            className="bg-gray-100 text-gray-700 px-8 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Cancel
          </button>
        </div>
      </form>
      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Confirm Submission</h3>
            <p className="mb-6 text-gray-700">Are you sure you want to submit your feedback?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded bg-[#16610E]/90 text-white hover:bg-[#16610E] font-semibold"
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
};

export default FeedbackForm;
