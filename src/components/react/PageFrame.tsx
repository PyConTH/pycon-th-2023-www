import { lazy, useEffect, useRef } from 'react'
import '../index.scss'
import CookieConsentBanner from './misc/CookieConsentBanner'
// import Footer from './ui/Footer'

const Navbar = lazy(() => import('./ui/Navbar'))

interface IProps extends React.PropsWithChildren {
  hideNavbar?: boolean
  needFrame?: boolean
}

const PageFrame = (props: IProps) => {
  const pageFrameEl = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    listenScroll()
  }, [])

  const listenScroll = () => {
    const scroll = window.scrollY

    if (pageFrameEl !== null) {
      pageFrameEl.current!.onscroll = () => {
        console.log(pageFrameEl.current!.scrollTop)
      }
    }
  }

  const showEasterEgg = () => {
    return
  }

  if (props.needFrame === false) {
    return <div ref={pageFrameEl} className="">{props.children}</div>
  }

  return (
    <>
      <div ref={pageFrameEl} className="h-screen">
        <div className="bg-white flex flex-col h-full container mx-auto relative">
          {!props.hideNavbar && <Navbar />}

          <div className='flex-1 flex'>{props.children}</div>
          <div className="mt-4">
            {/* <Footer /> */}
          </div>
          <CookieConsentBanner />
        </div>
      </div>
    </>
  )
}

export default PageFrame
