import { useState, useEffect } from 'react';
import Step1Welcome from './components/Step1Welcome';
import Step2Vision from './components/Step2Vision';
import Step3Name from './components/Step3Name';
import Step4Birthdate from './components/Step4Birthdate';
import Step5TimeOfBirth from './components/Step5TimeOfBirth';
import Step6Finish from './components/Step6Finish';
import Home from './pages/Home';
import axios from 'axios';

const API_BASE = 'https://domluni.up.railway.app';

const App = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const updateData = (field: string, value: string) => {
    setUserData({ ...userData, [field]: value });
  };

  const next = () => setStep((prev) => prev + 1);

  useEffect(() => {
    if (step === 6 && !hasSubmitted && userData.name && userData.birthDate) {
      axios.post(`${API_BASE}/api/user`, {
        telegram_user_id: window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 'test-id',
        name: userData.name,
        birth_date: userData.birthDate,
        birth_time: userData.birthTime,
      });
      setHasSubmitted(true);
    }
  }, [step, userData, hasSubmitted]);

  if (step <= 6) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-pink-200">
        {step === 1 && <Step1Welcome onNext={next} />}
        {step === 2 && <Step2Vision onNext={next} />}
        {step === 3 && <Step3Name onNext={next} onChange={updateData} />}
        {step === 4 && <Step4Birthdate onNext={next} onChange={updateData} />}
        {step === 5 && <Step5TimeOfBirth onNext={next} onChange={updateData} />}
        {step === 6 && <Step6Finish userData={userData} />}
      </div>
    );
  }

  return <Home userName={userData.name || 'Дорогая'} affirmationStyle="gentle" meditationStyle="visual" telegramId={window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 'test-id'} />;
};

export default App;
