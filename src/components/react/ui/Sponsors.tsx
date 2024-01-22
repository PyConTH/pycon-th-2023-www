import ODDS from '../../assets/sponsors/ODDS.svg'

export default function Sponsors() {
  const datarockieUrl = `https://ik.imagekit.io/p9bsqmrho/landing/data-rockie.png`
  const densoUrl = `https://ik.imagekit.io/p9bsqmrho/landing/denso-resize.jpg`
  const simplesatUrl = `https://ik.imagekit.io/p9bsqmrho/landing/simplesat.png`

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-3xl font-semibold mt-20 text-primary'>Sponsors / Partners</h2>
      <h2 className='text-2xl mt-10 mb-4 text-primary font-semibold'>Headline</h2>
      <div className='card w-56 bg-base-100 shadow-xl'>
        <figure>
          <img src={datarockieUrl} className='items-center' alt='Data Rockie Logo is loading' />
        </figure>
        <div className='card-body text-center flex items-center'>
          <h4 className='card-title text-secondary'>Toy DataRockie</h4>
        </div>
      </div>
      <h2 className='text-3xl font-semibold mt-20 text-primary'>Conference & After Party Partner</h2>
      <div className='card w-60 ml-10 bg-base-100 shadow-xl'>
        <figure className='p-5'>
          <img src={ODDS} alt='ODDS Logo' />
        </figure>
      </div>

      <h2 className='text-2xl mt-10 mb-4 text-primary font-semibold'>Platinum</h2>
      <div className='card w-56 bg-base-100 shadow-xl'>
        <figure className='p-5'>
          <img src={densoUrl} className='items-center' alt='Denso Logo is loading' />
        </figure>
      </div>

      <h2 className='text-2xl mt-10 mb-4 text-primary font-semibold'>Patron</h2>
      <div className='flex'>
        <div className='card w-56 bg-base-100 shadow-xl mr-10'>
          <figure className='p-5'>
            <a
              href='https://www.simplesat.io/?utm_source=pycon&utm_medium=website&utm_campaign=pycon_sponsor_2023'
              target='_blank'
            >
              <img src={simplesatUrl} className='items-center' alt='Simplesat Logo is loading' />
            </a>
          </figure>
        </div>
        <div className='card w-56 bg-base-100 shadow-xl'>
          <div className='text-center p-3'>
            <h4 className='card-title text-secondary'>Piti Champeethong (MongoDB)</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
