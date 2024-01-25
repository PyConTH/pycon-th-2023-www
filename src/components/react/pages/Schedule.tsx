import { useEffect, useState } from 'react'

import { Icon } from '@iconify/react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent'

import type { EventDetail, ScheduleItem } from '@/assets/schedule'
import { firstDaySchedule, secondDaySchedule, workshopSchedule } from '@/assets/schedule'

/**
 * Formats the start time of a schedule item.
 * @param startTime - The start time of the schedule item.
 * @returns The formatted start time string.
 */
function formatStartTime(startTime: string): string {
  const dateTime = startTime.split('T')
  const timeList = dateTime[1].split(':')
  return `${timeList[0]}:${timeList[1]}`
}

/**
 * Generates the content for a session.
 * @param eventDetail - The event detail object containing the session information.
 * @returns The JSX element containing the session content.
 */
function sessionContent(eventDetail?: EventDetail): JSX.Element {
  return (
    <>
      {eventDetail?.position && (
        <div className='mt-2'>
          <b>Position:</b> {eventDetail.position}
        </div>
      )}
      {eventDetail?.desc && (
        <div>
          <b>Talk Description:</b> {eventDetail.desc}
        </div>
      )}
      {/* {eventDetail?.speaker && (
        <div className='mt-2'>
          <b>Speaker:</b> {eventDetail.speaker}
        </div>
      )} */}
      {eventDetail?.bio && (
        <div className='mt-2'>
          <b>Bio:</b>
          <div dangerouslySetInnerHTML={{ __html: eventDetail.bio }}></div>
        </div>
      )}
      {eventDetail?.org && (
        <div className='mt-2'>
          <b>Organization:</b> {eventDetail.org}
        </div>
      )}
    </>
  )
}

/**
 * Generates the timeline component for the given schedule.
 * @param schedule - The schedule data to be displayed.
 * @returns The JSX element containing the timeline component.
 */
function timeline(schedule: ScheduleItem[], mobileRoom: number): JSX.Element {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {schedule.map(({ start_time, event, isBreak, isLunch, end_time }) => {
        return (
          <TimelineItem key={start_time}>
            <TimelineOppositeContent style={{ marginTop: '20px' }}>
              {formatStartTime(start_time)} - {formatStartTime(end_time)}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: isBreak || isLunch ? '#ff9645' : '#7F23F7' }}>
                {isBreak && <Icon className='hidden md:block' icon='ph:coffee-light' height={32} />}
                {isLunch && <Icon className='hidden md:block' icon='ion:fast-food-outline' height={32} />}
                {!isBreak && !isLunch && (
                  <Icon className='hidden md:block' icon='guidance:conference-room' height={32} />
                )}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {isBreak && <h1 className='ml-4 text-2xl color-dark-yellow mt-4'>Break</h1>}
              {isLunch && <h1 className='ml-4 text-2xl color-dark-yellow mt-4'>Lunch</h1>}
              {!isBreak && !isLunch && event && (
                <div className='collapse bg-gray-200 bg-opacity-20'>
                  <input type='checkbox' />
                  <div className='collapse-title'>
                    <div className='flex'>
                      <div className={`md:w-6/12 pr-10 color-cyan ${mobileRoom === 0 ? 'w-full' : 'hidden'}`}>
                        <h1 className='text-lg font-medium'>
                          <div className='flex gap-x-1'>
                            {event[0].isEnglish !== undefined && (
                              <div className='badge bg-pink color-white'>
                                {event[0].isEnglish ? 'EN' : 'TH'}
                                <br />
                              </div>
                            )}
                            {event[0].isKeynote && <div className='badge bg-yellow color-white'>Keynote</div>}
                            {event[0].isKeynote && <br />}
                          </div>
                          {event[0].title}
                        </h1>
                        <h1 className='text-md color-dark-blue'>{event[0].speaker}</h1>
                      </div>
                      <div className={`md:block md:w-6/12 ml-7 color-green ${mobileRoom === 1 ? 'w-full' : 'hidden'}`}>
                        {event.length > 1 ? (
                          <>
                            <h1 className='text-lg font-medium'>
                              <div className='flex gap-x-1'>
                                {event[1].isEnglish !== undefined && (
                                  <div className='badge bg-pink color-white'>
                                    {event[1].isEnglish ? 'EN' : 'TH'}
                                    <br />
                                  </div>
                                )}
                                {event[1].isKeynote && <div className='badge bg-yellow color-white'>Keynote</div>}
                                {event[1].isKeynote && <br />}
                              </div>
                              {event[1].title}
                            </h1>
                            <h1 className='text-md color-dark-green'>{event[1].speaker}</h1>
                          </>
                        ) : (
                          <h1 className='text-lg font-medium'>N/A</h1>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='collapse-content flex'>
                    <div className='md:hidden flex flex-col color-cyan w-full pr-10 bg-white bg-opacity-60 pl-5 pb-5'>
                      {sessionContent(event[mobileRoom])}
                    </div>
                    <div className='w-full md:w-6/12 pr-10 hidden md:flex md:flex-col color-cyan bg-white bg-opacity-60 pl-5 pb-5'>
                      {sessionContent(event[0])}
                    </div>
                    <div className='hidden md:w-6/12 md:flex flex-col color-green bg-white bg-opacity-60 pr-5 pb-5'>
                      {sessionContent(event[1])}
                    </div>
                  </div>
                </div>
              )}
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}

/**
 * The Schedule component that displays the timeline for the PyCon schedule.
 * @returns The JSX element containing the Schedule component.
 */
export default function Schedule(): JSX.Element {
  const [day, setDay] = useState(15)
  const [schedule, setSchedule] = useState<ScheduleItem[]>(firstDaySchedule)
  const [mobileRoom, setMobileRoom] = useState(0)

  useEffect(() => {
    switch (day) {
      case 16:
        setSchedule(secondDaySchedule)
        break
      case 14:
        setSchedule(workshopSchedule)
        break
      default:
        setSchedule(firstDaySchedule)
        break
    }
  }, [day])

  return (
    <div className='flex flex-col items-center bg-white'>
      <div className='tabs tabs-boxed  bg-light-secondary'>
        <a className={`tab ${day === 14 ? 'tab-active' : ''}`} onClick={() => setDay(14)}>
          (Workshop) 14 Dec
        </a>
        <a className={`tab ${day === 15 ? 'tab-active' : ''}`} onClick={() => setDay(15)}>
          15 Dec
        </a>
        <a className={`tab ${day === 16 ? 'tab-active' : ''}`} onClick={() => setDay(16)}>
          16 Dec
        </a>
      </div>
      <div className='flex pt-5 w-full justify-center'>
        <div className='w-0/12 md:w-3/12'></div>
        <div className='hidden md:block w-4/12 color-cyan'>{day === 14 ? 'Room 1' : 'Grand Chambray'}</div>
        <div className='hidden md:block w-4/12 pl-10 color-green'>{day === 14 ? 'Room 2' : 'Cashmere 1'}</div>
        <div className='md:hidden tabs tabs-boxed bg-light-secondary'>
          <a className={`tab ${mobileRoom === 0 ? 'tab-active' : ''}`} onClick={() => setMobileRoom(0)}>
            {day === 14 ? 'Room 1' : 'Grand Chambray'}
          </a>
          <a className={`tab ${mobileRoom === 1 ? 'tab-active' : ''}`} onClick={() => setMobileRoom(1)}>
            {day === 14 ? 'Room 2' : 'Cashmere 1'}
          </a>
        </div>
        <div className='w-1/12'></div>
      </div>
      <div className='flex'>{timeline(schedule, mobileRoom)}</div>
    </div>
  )
}
