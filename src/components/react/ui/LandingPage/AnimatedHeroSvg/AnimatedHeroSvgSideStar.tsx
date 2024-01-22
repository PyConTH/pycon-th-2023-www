import anime from 'animejs'

import { useCallback, useEffect, useRef } from 'react'

const AnimatedHeroSvgSideStar = () => {
  const star = useRef<any | null>(null)

  const animateIn = useCallback(() => {
    anime({
      targets: '.animated-hero-star .star-container',
      transformOrigin: ['50%', '50%'], // Set the rotation center to the center of the object
      scale: [0, 1.0],
      loop: false,
      duration: 2000,
    })

    anime({
      targets: '.animated-hero-star .pink-circle',
      transformOrigin: ['50%', '50%'], // Set the rotation center to the center of the object
      translateY: [100, 20],
      translateX: [100, 20],
    })
  }, [])

  const animate = useCallback(() => {
    animateIn()

    anime({
      targets: star.current,
      rotate: '+=360', // Rotate by 180 degrees
      // scale: [1.0, 1.0, 1.1, 1.0, 0.9, 1.0, 1.0],
      scale: [1.0, 1.2, 1.0],
      transformOrigin: ['50%', '50%'], // Set the rotation center to the center of the object
      loop: true,
      easing: 'easeInOutQuad',
      duration: 10000,
    })
  }, [animateIn])

  useEffect(() => {
    animate()
  }, [animate])

  return (
    <svg className="animated-hero-star" viewBox="0 0 257 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_574_46385)">
        <path d="M257 0H0V260H257V0Z" fill="#F8572B"/>
        <path className="pink-circle" d="M74.5977 259.983V257.574C74.5977 157.11 156.333 75.5401 257 75.5401V259.983H74.5977Z" fill="#EF82EB"/>
        <g className="star-container">
          <path ref={star} className="star" d="M189.318 119.392C168.486 108.681 151.523 91.7519 140.79 70.9622L130.161 50.3604L119.531 70.9622C108.798 91.7519 91.8347 108.681 71.0029 119.392L50.3594 130L71.0029 140.609C91.8347 151.32 108.798 168.249 119.531 189.038L130.161 209.64L140.79 189.038C151.523 168.249 168.486 151.32 189.318 140.609L209.962 130L189.318 119.392Z" fill="white"/>
        </g>
      </g>
      <defs>
      <clipPath id="clip0_574_46385">
      <rect width="257" height="260" fill="white"/>
      </clipPath>
      </defs>
      </svg>

  )
}

export default AnimatedHeroSvgSideStar