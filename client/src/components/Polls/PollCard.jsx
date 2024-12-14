import React from 'react'

const pollQuestion = {
  id: 1,
  question: "What is your favorite programming language?",
  options: [
    { id: 1, text: "JavaScript" },
    { id: 2, text: "Python" },
    { id: 3, text: "Java" },
    { id: 4, text: "C++" },
  ],
};

const PollCard = () => {
  return (
    <div className='flex flex-col gap-4 bg-white p-4 rounded-lg overflow-hidden'>
      
      <div className='flex gap-2 items-center'>
        <div className='w-8 h-8 rounded-full bg-blue-600'></div>
        <div className='flex flex-col  text-xs'>
          <p className='text-[10px] text-slate-600'>Poll created by </p>
          <p className='text-slate-700 font-semibold'>Mubasshir Farooqui</p>
        </div>
      </div>

      <div className='flex flex-col'>
        <p className='font-semibold'>{pollQuestion.question}</p>
      </div>

      <div className='flex flex-col gap-2'>
        {pollQuestion.options.map(option => <div><p className='border-2 py-1 px-2 rounded-md'>{option.text}</p></div>)}
      </div>
    </div>
  );
};

export default PollCard