import React from 'react'
import PollQuestion from './../../data/samplePollQuestions.json'
import PollCard from './PollCard'

const Polls = () => {
  return (
    <div className='flex flex-col'>
      {PollQuestion.map(poll => <PollCard poll={poll} />)}
    </div>
  )
}

export default Polls