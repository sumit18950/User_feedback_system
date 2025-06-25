import axios from 'axios';
import { useEffect, useState } from 'react';

const starIcon = (filled) => (
  <svg
    className={`w-6 h-6 inline-block ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.036 6.29a1 1 0 00.95.69h6.62c.969 0 1.371 1.24.588 1.81l-5.36 3.898a1 1 0 00-.364 1.118l2.036 6.29c.3.921-.755 1.688-1.54 1.118l-5.36-3.898a1 1 0 00-1.176 0l-5.36 3.898c-.784.57-1.838-.197-1.54-1.118l2.036-6.29a1 1 0 00-.364-1.118L2.855 11.717c-.783-.57-.38-1.81.588-1.81h6.62a1 1 0 00.95-.69l2.036-6.29z"
    />
  </svg>
);

const ratingLabels = {
  5: { label: 'Amazing', color: 'bg-pink-100 text-pink-600', bar: 'bg-pink-400' },
  4: { label: 'Good', color: 'bg-green-100 text-green-700', bar: 'bg-green-400' },
  3: { label: 'Okay', color: 'bg-gray-100 text-gray-700', bar: 'bg-gray-400' },
  2: { label: 'Bad', color: 'bg-yellow-100 text-yellow-700', bar: 'bg-yellow-400' },
  1: { label: 'Terrible', color: 'bg-red-100 text-red-600', bar: 'bg-red-400' },
};

function getAverageRating(feedbacks) {
  if (!feedbacks.length) return 0;
  const sum = feedbacks.reduce((acc, f) => acc + (f.rating || 0), 0);
  return (sum / feedbacks.length).toFixed(2);
}

function getRatingCounts(feedbacks) {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  feedbacks.forEach(f => {
    if (f.rating) counts[f.rating]++;
  });
  return counts;
}

const Dashboard = ({isDark}) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const res = await axios.get('http://localhost:5000/feedback');
      setFeedbacks(res.data);
    };
    fetchFeedbacks();
  }, []);

  const filteredFeedbacks = category
    ? feedbacks.filter(f => f.category === category)
    : feedbacks;

  const avgRating = getAverageRating(filteredFeedbacks);
  const ratingCounts = getRatingCounts(filteredFeedbacks);
  const totalReviews = filteredFeedbacks.length;

  return (
    <div className={`max-w-5xl mx-auto p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8
      ${isDark ? 'bg-[#111111] text-white' : 'bg-white text-gray-900'}
    `}>
      {/* Left: Overall rating and reviews */}
      <div className="flex-1 min-w-[320px]">
        
        <div className="flex flex-col items-center mb-8">
          <span className={`text-5xl font-extrabold mb-2
            ${isDark ? 'text-white' : 'text-gray-900'}
            `}>{avgRating}</span>
          <div className="flex mb-1">
            {[1,2,3,4,5].map(i => (
              <span key={i}>{starIcon(i <= Math.round(avgRating))}</span>
            ))}
          </div>
          <span className="text-gray-500 text-sm">({totalReviews} Reviews)</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-semibold text-gray-800
            ${isDark ? 'text-white' : 'text-gray-900'}
            `}>Reviews</h3>
          <select
            className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm
              ${isDark? 'bg-[#222222] text-white' : 'bg-white text-gray-900'}
              `}
            onChange={e => setCategory(e.target.value)}
            value={category}
          >
            <option value="">All</option>
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
            <option value="suggestion">Suggestion</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-4 overflow-y-auto max-h-[200px] scrollbar-thin">
          {filteredFeedbacks.map(fb => (
            <div key={fb._id} className={`bg-gray-50 rounded-lg p-4 border border-gray-200 shadow flex flex-col gap-2
            ${isDark ? 'bg-[#222222] text-white' : 'bg-white text-gray-900'}
            `}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 20c0-2.21 3.582-4 6-4s6 1.79 6 4"/></svg>
                </div>
                <div>
                  <div className={`font-semibold flex items-center gap-2
                    ${isDark ? 'text-white' : 'text-gray-900'}
                    `}>
                    {fb.name || 'Anonymous'}
                    <span className="ml-2">
                      {[1,2,3,4,5].map(i => (
                        <span key={i}>{starIcon(i <= (fb.rating || 0))}</span>
                      ))}
                    </span>
                    {fb.category && (
                      <span className="ml-2 px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700 font-medium capitalize">
                        {fb.category}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">{fb.createdAt ? new Date(fb.createdAt).toLocaleDateString() : ''}</div>
                </div>
              </div>
              <div className={`text-gray-700 text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{fb.message}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Rating breakdown */}
      <div className={`flex-1 min-w-[280px]  rounded-xl p-6 border border-gray-100
        ${isDark ? 'bg-[#222222] text-white' : 'bg-white text-gray-900 '}
        `}>
        <h3 className={`text-lg font-semibold mb-6 text-gray-800
          ${isDark ? 'text-white' : 'text-gray-900'}
          `}>Element of Evaluation</h3>
        <div className="space-y-4">
          {[5,4,3,2,1].map(rating => {
            const percent = totalReviews ? Math.round((ratingCounts[rating] / totalReviews) * 100) : 0;
            return (
              <div key={rating}>
                <div className="flex justify-between mb-1">
                  <span className={`font-medium
                    ${isDark? 'text-gray-200': 'text-gray-700'}
                    `}>{rating} Star</span>
                  <span className="text-sm font-semibold text-gray-500">{percent}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`${ratingLabels[rating].bar} h-3 rounded-full transition-all`}
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
