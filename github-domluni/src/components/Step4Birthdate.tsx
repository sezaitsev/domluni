const Step4Birthdate = ({ onNext, onChange, userData }: any) => (
  <div className="text-center p-4">
    <h1 className="text-xl font-bold mb-4">Step4Birthdate</h1>
    <button className="bg-pink-500 text-white px-4 py-2 rounded" onClick={() => onNext()}>
      Далее →
    </button>
  </div>
);

export default Step4Birthdate;
