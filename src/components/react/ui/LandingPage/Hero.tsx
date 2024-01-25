import AnimatedHeadLine from './AnimatedHeadline'
import AnimatedHeroSvgBottom from './AnimatedHeroSvg/AnimatedHeroSvgBottom'
import AnimatedHeroSvgSideStar from './AnimatedHeroSvg/AnimatedHeroSvgSideStar'
import AnimatedHeroSvgSideTukTuk from './AnimatedHeroSvg/AnimatedHeroSvgSideTukTuk'

// Hero component
const Hero = () => {
  const calendarEventName = encodeURI('Pycon Thailand 2023')
  const eventDetails = encodeURI('Pycon Thailand 2023')
  const location = encodeURI('Avani Sukhumvit Bangkok')
  const workshopLocation = encodeURI('Microsoft Thailand')

  return (
    // media query mobile 100dvh
    // media query desktop 80dvh
    <div className='grid grid-cols-1 md:grid-cols-5 min-h-[40vh]'>
      <div className='md:col-span-4 col-span-full relative flex flex-col justify-between'>
        <div className='lg:pl-16 px-4 h-full flex flex-col justify-center'>
          <div className='flex flex-wrap flex-col pb-2'>
            <AnimatedHeadLine />
          </div>
          <div>
            <div className='text-2xl text-black'>
              <div className='flex flex-col'>
                <div className='leading-relaxed'>Discover the Magic of Python in</div>
                <div className=''>the Land of Smiles :)</div>
              </div>
            </div>
            <div className='flex flex-col items-start mt-4'>
              <div className='flex bg-header-orange text-white font-bold text-xl uppercase rounded-lg px-4 py-2'>
                See you again sometime in Q1/2025
              </div>
            </div>
          </div>
        </div>
        <div className='justify-self-end'>
          <AnimatedHeroSvgBottom />
        </div>
      </div>

      <div className='md:col-span-1 md:flex flex-col justify-end hidden'>
        <AnimatedHeroSvgSideTukTuk />
        <AnimatedHeroSvgSideStar />
      </div>
    </div>
  )
}

export default Hero
