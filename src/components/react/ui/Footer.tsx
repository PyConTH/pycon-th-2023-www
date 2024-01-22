import { Icon } from 'astro-iconify'

// Footer component
const Footer = () => {
    const socials = [
        {
            icon: 'logos:discord-icon',
            link: 'https://discord.gg/Hg7cUDzvwu'
        },
        {
            icon: 'devicon:google',
            link: 'https://www.google.co.th/search?q=pycon+thailand'
        },
        {
            icon: 'logos:messenger',
            link: 'http://m.me/PyConThailand'
        },
        {
            icon: 'ri:line-fill',
            link: '',
            color: '#00b900'
        },
        {
            icon: 'logos:twitter',
            link: 'https://twitter.com/pyconthailand'
        },
        {
            icon: 'mdi:github',
            link: ''
        },
        {
            icon: 'logos:microsoft-teams',
            link: ''
        },
        {
            icon: 'logos:facebook',
            link: 'https://www.facebook.com/PyConThailand'
        },
    ]

    return (
        <footer className="flex items-center justify-between relative bg-slate-100 sm:px-8 md:px-16 lg:px-16 pt-4 pb-32 overflow-clip">
            <div className="flex-shrink p-4">
                <img src='/images/common/pyconth2023_logo.svg' className="h-12" alt='Pycon Logo' />
            </div>

            <div className="max-sm:flex-col md:flex">
              <div className="text-gray-400 text-center font-semibold px-4">
                © 2023. PyCon Thailand. All rights reserved.
              </div>
              <div className="md:flex flex gap-x-4 px-4 max-md:mt-4">
                {
                  socials.filter(social => social.link !== '')
                    .map((social, index) => (
                      <a href={social.link} target="_blank" key={`${social.icon}-${index}`} className="">
                        <Icon icon={social.icon} color={social.color} width="24px" height="24px"/>
                      </a>
                    )
                  )
                }
              </div>
            </div>

            {/* <div className="md:hidden lg:hidden sm:flex-col">
                <div className="text-gray-400 text-center font-semibold p-4">
                    © 2023. PyCon Thailand. All rights reserved.
                </div>
                <div className="flex flex-shrink gap-x-4 justify-center items-center px-4">
                    {socials.map(social => (
                        <a href={social.link} target="_blank" key={social.link}>
                            <Icon icon={social.icon} color={social.color} width="24px" height="24px"/>
                        </a>
                    ))}
                </div>
            </div> */}

            <div className="group text-center absolute w-full left-0 bottom-0 translate-y-8 hover:translate-y-0 hover:opacity-100 transition-all cursor-pointer">
              <span className="text-6xl opacity-25 group-hover:hidden">🐍</span>
              <a href="https://youtu.be/kMwodsPwrSQ?t=8" className="text-6xl group-hover:block group-hover:animate-bounce hidden">🐘</a>
            </div>
        </footer>
    )
}

export default Footer
