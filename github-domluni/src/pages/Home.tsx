import React, { useEffect } from 'react';
import axios from 'axios';

const Home = ({ userName, affirmationStyle, meditationStyle, telegramId }) => {
  useEffect(() => {
    axios.post('https://domluni.up.railway.app/api/session', {
      telegram_user_id: telegramId,
      timestamp: new Date().toISOString(),
    });
  }, [telegramId]);

  const dailyAffirmation = 'Я уверена в себе и заслуживаю любви.';

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold mb-4">Привет, {userName} 💖</h2>
      <p className="text-lg mb-2">Твоя сегодняшняя аффирмация:</p>
      <div className="bg-white text-pink-700 italic text-lg rounded-xl p-4 shadow mb-6">
        “{dailyAffirmation}”
      </div>
    </div>
  );
};

export default Home;
