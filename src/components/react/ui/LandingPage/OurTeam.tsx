import type { Teams } from '@assets/team'
import { teams } from '@assets/team'
import { Icon } from '@iconify/react'

const TeamList = ({ team, color }: { team: Teams; color: string }) => {
  const displaySocial = () => {
    const socials = []

    if (team.linkedin) {
      socials.push(
        <a key={team.name + '_linkedin'} href={team.linkedin} target='_blank' style={{ color }}>
          <Icon icon='uil:linkedin' />
        </a>,
      )
    }

    if (team.github) {
      socials.push(
        <a key={team.name + '_github'} href={team.github} target='_blank' style={{ color }}>
          <Icon icon='uil:github' />
        </a>,
      )
    }

    if (team.twitter) {
      socials.push(
        <a key={team.name + '_x'} href={team.twitter} target='_blank' style={{ color }}>
          <Icon icon='simple-icons:x' />
        </a>,
      )
    }

    if (team.facebook) {
      socials.push(
        <a key={team.name + '_facebook'} href={team.facebook} target='_blank' style={{ color }}>
          <Icon icon='uil:facebook' />
        </a>,
      )
    }

    if (team.website) {
      socials.push(
        <a key={team.name + '_website'} href={team.website} target='_blank' style={{ color }}>
          <Icon icon='material-symbols:language' />
        </a>,
      )
    }

    return socials
  }

  return (
    <div className='w-[calc(100%/3-0.75em)] md:w-[calc(100%/4-1.5em)]'>
      <div className='flex flex-wrap justify-start w-full'>
        <div className='w-full' style={{ color }}>
          <div
            className='w-full h-[140px] md:h-[280px] rounded'
            style={{ background: `url(${team.image}) center/cover no-repeat` }}
          ></div>
          <div className='py-4'>
            <p className='text-xl max-md:text-base max-sm:text-sm font-semibold'>{team.name}</p>
            <p className='text-lg max-md:text-sm max-sm:text-xs font-medium mb-2' style={{ color: '#A7ADB9' }}>
              {team.role}
            </p>
            <div className='mb-1 flex gap-x-2 text-xl max-md:text-base max-sm:text-sm items-center'>
              {displaySocial()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OurTeam() {
  let colorsFull = [
    '#00B4D5',
    '#00CE7F',
    '#F8572B',
    '#EF82EB',
    '#FF9934',
    '#5F01D1',
    '#075A82',
    '#00CE7F',
    '#F8572B',
    '#FF9934',
    '#00B4D5',
    '#5F01D1',
    '#EF82EB',
    '#00CE7F',
    '#FF9934',
    '#075A82',
    '#5F01D1',
  ];

  return (
    <div className='flex flex-col justify-between bg-white px-4 md:px-8 py-8'>
      <div className='flex flex-col gap-y-4 px-2 py-4 md:py-16 items-end mb-8'>
        <div className='flex justify-center items-center ml-2 bg-header-orange text-white font-extrabold text-4xl leading-10 tracking-tighter uppercase p-2 w-64 h-24'>
          Our Team
        </div>
        <div className='flex flex-wrap gap-x-4'>
          <Icon icon='fluent:sparkle-32-filled' color='#ffc801' width='40px' height='40px' />
          <div className='flex justify-end items-center ml-2 bg-primary text-white p-2 w-max'>
            Be a Volunteer <Icon className='ml-2' icon='ic:round-add-reaction' color='white' />
          </div>
        </div>
      </div>

      <div className='w-full flex flex-wrap justify-center md:justify-start gap-3 md:gap-6'>
        {teams.slice(0, 3).map((team, index) => {
          return <TeamList key={`team-top-${index}`} team={team} color={colorsFull[index]} />
        })}
      </div>

      <div className='w-full flex flex-wrap justify-center md:justify-start gap-3 md:gap-6'>
        {teams.slice(3).map((team, index) => {
          return <TeamList key={`team-under-${index}`} team={team} color={colorsFull[index + 3]} />
        })}
      </div>
    </div>
  )
}
