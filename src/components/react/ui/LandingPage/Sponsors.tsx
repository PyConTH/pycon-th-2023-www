import { Icon } from 'astro-iconify'
import ODDS from '@assets/sponsors/ODDS.svg'
import EarnIn from '@assets/sponsors/earnin.svg'
import counchbase from '@assets/sponsors/couchbase.svg'
import thaiProgrammer from '@assets/sponsors/ThaiProgrammerAssociation.svg'
import creatorsgarten from '@assets/sponsors/Creatorsgarten.svg'

const community = () => {
  const bigDataPRG = 'https://ik.imagekit.io/p9bsqmrho/sponsors/BigDataRPG.jpeg'
  const bornToDev = 'https://ik.imagekit.io/p9bsqmrho/sponsors/BorntoDev.png'
  const codesanook = 'https://ik.imagekit.io/p9bsqmrho/sponsors/Codesanook.png'
  const dataTH = 'https://ik.imagekit.io/p9bsqmrho/sponsors/DataTH.png'
  const milsBlog = 'https://ik.imagekit.io/p9bsqmrho/sponsors/MilsBlog.png'
  const openSourceEdu = 'https://ik.imagekit.io/p9bsqmrho/sponsors/OpenSourceEducationandDevelopmentAssociation.png'
  const pyLadis = 'https://ik.imagekit.io/p9bsqmrho/sponsors/PyLadiesBangkok.png'
  const skooldio = 'https://ik.imagekit.io/p9bsqmrho/sponsors/Skooldio.png'
  const sparkTech = 'https://ik.imagekit.io/p9bsqmrho/sponsors/SparkTechThailand.png'
  
  const communities = [
    bigDataPRG,
    bornToDev,
    codesanook,
    creatorsgarten,
    dataTH,
    milsBlog,
    openSourceEdu,
    pyLadis,
    skooldio,
    sparkTech,
  ]

  return (
    <div>
      <h3 className='text-2xl mt-10 mb-4 text-primary font-semibold'>Community Partners</h3>
      <div className='flex max-md:flex-col items-center gap-x-4'>
        {communities.map(item => (
          <div className='card w-32 h-32 justify-center shadow-xl bg-white my-4'>
            <figure className='p-5'>
              <img src={item} key={item} className='items-center' />
            </figure>
          </div>
        ))}
      </div>
    </div>
  )
}
export default function Sponsors() {
  const datarockieUrl = `https://ik.imagekit.io/p9bsqmrho/landing/data-rockie.png`
  const densoUrl = `https://ik.imagekit.io/p9bsqmrho/landing/denso-resize.jpg`
  const simplesatUrl = `https://ik.imagekit.io/p9bsqmrho/landing/simplesat.png`
  const eventPopUrl = 'https://ik.imagekit.io/p9bsqmrho/sponsors/eventpop_primary_RGB.png'
  const psfLogoUrl = `https://ik.imagekit.io/p9bsqmrho/sponsors/psf.png`
  const tgtUrl = `https://ik.imagekit.io/p9bsqmrho/sponsors/tgt.png`
  const microsoft = 'https://ik.imagekit.io/p9bsqmrho/sponsors/Microsoft.png'

  return (
    <div id='sponsor' className='py-16'>
      <div className='flex flex-col items-center'>
        <h2 className='text-3xl font-semibold text-primary'>Sponsors / Partners</h2>
        <h3 className='text-2xl my-4 text-primary font-semibold'>Headline</h3>
        <div className='card w-56 bg-white shadow-xl'>
          <figure>
            <img src={datarockieUrl} className='items-center' alt='Data Rockie Logo is loading' />
          </figure>
          <div className='card-body text-center flex items-center'>
            <h4 className='card-title text-secondary'>Toy DataRockie</h4>
          </div>
        </div>
      </div>

      <div className='mt-16 flex flex-col items-center text-center'>
        <h2 className='text-2xl font-semibold my-8 text-primary'>Conference & After Party Partner</h2>
        <div className='card w-60 shadow-xl bg-white'>
          <figure className='p-5'>
            <img src={ODDS} className='items-center' alt='ODDS Logo is loading' />
          </figure>
        </div>

        <div className='mt-16 flex flex-col items-center text-center'>
          <h2 className='text-2xl font-semibold my-8 text-primary'>Python Software Foundation</h2>
          <div className='card w-60 shadow-xl bg-white'>
            <a href='https://www.python.org/psf-landing/'>
              <figure className='p-5'>
                <img src={psfLogoUrl} className='items-center' alt='PSF Logo is loading' />
              </figure>
            </a>
          </div>
        </div>

        <h3 className='text-2xl mt-10 mb-4 text-primary font-semibold'>Platinum</h3>
        <div className='flex max-md:flex-col items-center gap-x-4'>
          <div className='card w-56 shadow-xl bg-white'>
            <figure className='p-5'>
              <img src={densoUrl} className='items-center' alt='Denso Logo is loading' />
            </figure>
          </div>
          <div className='card w-56 shadow-xl bg-white max-md:mt-5'>
            <figure className='p-5 my-4'>
              <img src={counchbase} className='items-center' alt='Counchbase Logo is loading' />
            </figure>
          </div>
        </div>

        <h3 className='text-2xl mt-10 mb-4 text-primary font-semibold'>Sliver</h3>
        <div className='flex max-md:flex-col items-center gap-x-4'>
          <div className='card w-56 shadow-xl bg-white'>
            <figure>
              <img src={EarnIn} className='items-center' alt='EarnIn Logo is loading' />
            </figure>
          </div>
          <div className='card w-56 shadow-xl bg-white max-md:mt-5'>
            <figure className='my-9'>
              <img src={eventPopUrl} className='items-center' alt='EventPop Logo is loading' />
            </figure>
          </div>
          <div className='card w-56 shadow-xl bg-white max-md:mt-5'>
            <figure className='p-5 my-7'>
              <img src={tgtUrl} className='items-center' alt='The Gang Technology Logo is loading' />
            </figure>
          </div>
        </div>

        <h3 className='text-2xl mt-10 mb-4 text-primary font-semibold'>Patron</h3>
        <div className='flex max-md:flex-col items-center gap-x-4'>
          <div className='card w-56 shadow-xl bg-white'>
            <figure className='p-5 my-4'>
              <img src={simplesatUrl} className='items-center' alt='Simplesat Logo is loading' />
            </figure>
          </div>
          <div className='card w-56 shadow-xl bg-white max-md:mt-5'>
            <div className='text-center p-3'>
              <p className='card-title text-secondary text-xl'>Piti Champeethong (MongoDB)</p>
            </div>
          </div>
          <div className='card w-56 shadow-xl bg-white max-md:mt-5'>
            <figure className='p-5 my-4'>
              <img src={microsoft} className='items-center' alt='Microsoft Logo is loading' />
            </figure>
          </div>
          <div className='card w-56 shadow-xl bg-white max-md:mt-5'>
            <figure className='p-5 my-4'>
              <img
                src={thaiProgrammer}
                className='items-center'
                alt='Thai Programmer Association Logo is loading'
              />
            </figure>
          </div>
        </div>
        {community()}
      </div>

      <div className='text-center mt-16'>
        <a
          href='https://www.canva.com/design/DAFkARVxuLI/I-ufznB4xLhvsdJEl571NQ/view?utm_content=DAFkARVxuLI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
          className='bg-pyconth-violet-600 text-white px-4 gap-x-0 hover:gap-x-2 py-2 inline-flex items-center justify-between mx-auto transition-all active:scale-90'
          target='_blank'
        >
          See sponsorship deck
          <Icon icon='fluent:arrow-right-24-filled' className='ml-2 inline-block' />
        </a>
      </div>
    </div>
  )
}
