import { Icon } from '@iconify/react'

const options = [
  {
    text: '2018',
    url: 'https://th.pycon.org/2018',
  },
  {
    text: '2019',
    url: 'https://th.pycon.org/2019',
  },
  {
    text: '2021',
    url: 'https://th.pycon.org/2021',
  },
]

export default function PastPycon() {
  const listOptions = () => {
    return options.map((option) => {
      return (
        <li key={option.text} className="">
          <a href={option.url} className="hover:text-black py-2 px-6" target='_blank'>{option.text}</a>
        </li>
      )
    })
  }

  return (
    <div className='dropdown dropdown-hover dropdown-end'>
      <label tabIndex={0} className='m-1 btn text-white normal-case border-none bg-persian-blue-500 hover:bg-persian-blue-600'>
        Past PyconTH <Icon icon='mingcute:down-fill' color='white' />
      </label>

      <ul tabIndex={0} className='menu dropdown-content z-[1] p-2 shadow bg-persian-blue-300 text-white  rounded-box'>
        {listOptions()}
      </ul>
    </div>
  )
}
