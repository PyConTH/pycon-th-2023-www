import { useEffect, useState } from 'react'

interface IProps {
  fullscreen?: boolean
  text?: string
}

const Loading = (props: IProps) => {
  const text = props.text || 'Loading...'
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
      return () => setIsLoaded(false)
    }, 100)
  }, [])

  return (
    <div className={`
        ${isLoaded ? 'opacity-100' : 'opacity-0'}
        ${props.fullscreen ? 'fixed top-0 left-0 w-screen h-screen' : 'w-full h-full'}
        flex justify-center items-center
        backdrop-filter backdrop-blur-md
      bg-black/50 transition-opacity duration-500
      `}
      style={{ zIndex: 9999 }}
    >
      <div className="loading__container container">
        <p className="loading__text text-2xl text-white text-center">
          {text}
        </p>
      </div>
    </div>
  )
}

Loading.defaultProps = {
  fullscreen: true,
}

export default Loading