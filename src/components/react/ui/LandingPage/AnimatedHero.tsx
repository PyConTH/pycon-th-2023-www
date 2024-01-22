import { useCallback, useEffect, useState } from 'react'

const AnimatedHero = () => {
  const [left, setLeft] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const imageUrl = 'https://ik.imagekit.io/p9bsqmrho/landing/hero-transparent.png'
  const animate = useCallback(() => {
    // End Fade In, Start Fade Out
    const fade = [10, 93]

    setTimeout(() => {
      // console.log(left, opacity)
      if (left >= fade[1] && opacity > 0 && opacity <= 1.1) {
        setOpacity(opacity => opacity - 0.01)
      } else if (left <= fade[1] && opacity < 1) {
        setOpacity(opacity => opacity + 0.01)
      } else if (left >= fade[0] && opacity <= 0) {
        setOpacity(0)
      } else if (left <= fade[1] && opacity >= 1) {
        setOpacity(1)
      }

      setLeft(left => left + 0.05)
    }, 10)
  }, [left, opacity])

  useEffect(() => {
    if (left >= 99) {
      setLeft(0)
      return
    }

    animate()
  }, [left, animate])

  return (
    <div className='rounded-3xl shadow-b-shallow overflow-clip relative h-48 lg:h-96 w-full'>
      <div className='h-full w-full relative overflow-clip bottom-0'>
        <img
          src={imageUrl}
          alt='PyCon Bangkok Thailand Hero'
          className='absolute w-full h-full object-cover rounded-3xl'
          style={{
            objectPosition: `${left}% 3px`,
            opacity: opacity,
            filter: 'hue-rotate(180deg)',
          }}
        />
      </div>
    </div>
  )
}

export default AnimatedHero
