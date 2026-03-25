import React, { useState } from 'react';

const STEPS = ['Select Document', 'Enter Information', 'Review', 'Submit'];

export default function FilingWizard() {
  const [step, setStep] = useState(0);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">File a Document</h2>
      <div className="flex justify-between mb-6">
        {STEPS.map((s, i) => (
          <div key={s} className={`text-xs text-center flex-1 ${i <= step ? 'text-blue-600 font-bold' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-1 ${i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>{i + 1}</div>
            {s}
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded-lg shadow min-h-[200px]">
        <p className="text-gray-600">Step {step + 1}: {STEPS[step]}</p>
      </div>
      <div className="flex gap-3 mt-4">
        {step > 0 && <button onClick={() => setStep(step - 1)} className="flex-1 p-3 border rounded-lg">Back</button>}
        {step < STEPS.length - 1 && <button onClick={() => setStep(step + 1)} className="flex-1 p-3 bg-blue-600 text-white rounded-lg">Next</button>}
        {step === STEPS.length - 1 && <button className="flex-1 p-3 bg-green-600 text-white rounded-lg">Submit</button>}
      </div>
    </div>
  );
}
