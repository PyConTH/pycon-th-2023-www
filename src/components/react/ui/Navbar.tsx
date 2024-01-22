import { useState } from 'react'
import { Icon } from 'astro-iconify'

import { navigate } from 'astro:transitions/client';


type MenuType = {
  name: string
  hrefLink?: string
  link?: string
  subMenu?: MenuType[]
}

const menus: MenuType[] = [
  {
    name: 'About',
    subMenu: [
      {
        name: 'Code of conduct',
        link: '/conduct',
      },
      // {
      //   name: 'Past PyCon',
      //   link: '/past-pycon',
      // },
    ],
  },
  {
    name: 'Program',
    hrefLink: '/#program',
  },
  {
    name: 'Schedule',
    link: '/schedule',
  },
  {
    name: 'Venue',
    link: '/venue',
  },
  {
    name: 'Sponsor',
    hrefLink: '/#sponsor',
  },
  {
    name: 'Speakers',
    hrefLink: '/speakers',
  },

  // {
  //   name: 'News',
  // },
  // {
  //   name: 'Contact',
  // },
  {
    name: 'Previous',
    subMenu: [
      {
        name: 'PyCon Thailand 2021',
        hrefLink: 'https://2021.th.pycon.org/',
      },
      {
        name: 'PyCon Thailand 2019',
        hrefLink: 'https://2019.th.pycon.org/',
      },
      {
        name: 'PyCon Thailand 2018',
        hrefLink: 'https://2019.th.pycon.org/pycon2018/',
      },
    ],
  },
]

// Navbar component with good accessibility
const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false)
  const toggleOpenMobileNav = () => setOpenMobileNav(cur => !cur)

  const navigateTo = (link: any) => {
    setOpenMobileNav(false)
    navigate(link)
  }

  // Render menu list
  const listMenu = () => {
    // Render sub menu
    const listSubMenu = (subMenu: MenuType[]) => {
      return subMenu.map((menu, index) => {
        return (
          <li key={'menu-subitem-index-' + index}>
            {menu.link && <p onClick={() => navigateTo(menu.link)}>{menu.name}</p>}
            {menu.hrefLink && <a href={menu.hrefLink ? menu.hrefLink : '#'}>{menu.name}</a>}
          </li>
        )
      })
    }

    // Render menu
    return menus.map((menu, index) => {
      return (
        <div key={'menu-item-index-' + index} className='dropdown lg:dropdown-end max-md:dropdown-bottom'>
          {menu.link ? (
            <p onClick={() => navigateTo(menu.link)} className='flex items-center justify-end gap-x-2 cursor-pointer'>
              {menu.name} {menu.subMenu && <Icon icon='uil:angle-down' />}
            </p>
          ) : (
            <a
              tabIndex={0}
              className='flex items-center justify-end gap-x-2'
              href={menu.hrefLink ? menu.hrefLink : '#'}
            >
              {menu.name} {menu.subMenu && <Icon icon='uil:angle-down' />}
            </a>
          )}
          {menu.subMenu && (
            <ul tabIndex={0} className='dropdown-content z-[256] menu p-2 mt-2 shadow bg-white rounded-box w-52'>
              {listSubMenu(menu.subMenu)}
            </ul>
          )}
        </div>
      )
    })
  }

  const PyConLogo = () => (
    <a href='/'>
      <img src='/images/common/pyconth2023_logo.svg' alt='PyCon Thailand 2023' className='h-12 inline-block' />
    </a>
  )

  return (
    <nav className='w-full px-4 xl:px-16 py-10 mx-auto top-0 left-0'>
      <div className='flex justify-between items-center flex-wrap'>
        <div className='max-md:w-full inline-flex justify-between items-center'>
          <PyConLogo />

          <div className='inline-block md:hidden'>
            <div className='flex'>
              <a href='https://www.eventpop.me/e/15840'>
                <button className='flex items-center ml-2 bg-primary text-white p-2 w-max'>
                  Buy Ticket <Icon className='ml-2' icon='ion:ticket-outline' />
                </button>
              </a>
              <button className='flex items-center px-3 py-2' onClick={toggleOpenMobileNav}>
                <Icon icon={openMobileNav ? 'mdi:close' : 'mdi:menu'} color='#000' className='w-8 h-8' />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`
            text-black max-md:hidden flex gap-x-8
          `}
        >
          {/* Menu render */}
          {listMenu()}
          <a href='https://www.eventpop.me/e/15840'>
            <button className='flex items-center ml-2 bg-primary text-white p-2 w-max'>
              Buy Ticket <Icon className='ml-2' icon='ion:ticket-outline' />
            </button>
          </a>
        </div>

        <div
          className={`
            text-black
            ${openMobileNav ? 'md:hidden' : 'hidden max-md:py-0 border-b-0'}
            border-b-2 border-pyconth-violet-600 transition-all
            flex flex-col gap-x-8 py-4 gap-y-4 max-md:w-full max-md:items-center
          `}
        >
          {/* Menu render */}
          {listMenu()}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
