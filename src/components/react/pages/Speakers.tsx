import { type ISpeaker, speakers, keynoteSpeakers, workshopSpeakers } from '@assets/speakers'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import ReactMarkdown from 'react-markdown'

const bioThreshold = 300

function SpeakerCard(speaker: ISpeaker, showAll: boolean, setShowAll: (show: boolean) => void): JSX.Element {
  const isShortBio = speaker.shortBio.length < bioThreshold
  const speakerBio = showAll || isShortBio ? speaker.shortBio : speaker.shortBio.substring(0, bioThreshold) + '...'
  return (
    <div key={speaker.name} className='card bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={speaker.image} alt={speaker.name} />
      </figure>
      <div className='card-body text-center flex items-center'>
        <h4 className='card-title text-secondary'>{speaker.name}</h4>
        {speaker.jobTitle && (
          <div className='flex items-center'>
            <Icon icon='carbon:user-role' className='mx-3'></Icon>
            {speaker.jobTitle}
          </div>
        )}
        {speaker.organization && (
          <div className='flex items-center'>
            <Icon icon='mdi:company' className='mx-3'></Icon>
            {speaker.organization}
          </div>
        )}
        <div className='flex h-full items-center'>
          <ReactMarkdown className='unreset'>{speakerBio}</ReactMarkdown>
        </div>
        <Icon
          className='cursor-pointer'
          onClick={() => setShowAll(!showAll)}
          icon='ic:outline-message'
          width='24px'
          height='24px'
        />
      </div>
    </div>
  )
}

export default function Speakers(): JSX.Element {
  const [showAll, setShowAll] = useState(false)

  return (
    <div className='flex flex-col px-5'>
      <h1 className='text-center text-5xl my-8'>Keynotes</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
        {keynoteSpeakers.map(speaker => SpeakerCard(speaker, showAll, setShowAll))}
      </div>
      <hr className='mt-8 border-2' />
      <h1 className='text-center text-5xl my-8'>Speakers</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {speakers.map(speaker => SpeakerCard(speaker, showAll, setShowAll))}
      </div>
      <hr className='mt-8 border-2' />
      <h1 className='text-center text-5xl my-8'>Workshop</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {workshopSpeakers.map(speaker => SpeakerCard(speaker, showAll, setShowAll))}
      </div>
    </div>
  )
}
