import anime from 'animejs'

import { useCallback, useEffect } from 'react'

const AnimatedHeroSvgBottom = () => {
  useEffect(() => {
    animate()
  }, [])

  const animateIn = useCallback(() => {
    anime({
      targets: '.animated-hero-bottom .mangosteen',
      translateY: [-300, 0],
      duration: 3000,
    })

    anime({
      targets: ['.animated-hero-bottom .block-2 .blue-block'],
      translateY: [200, 50],
      duration: 3000,
    })

    // Shape 01
    anime({
      targets: ['.animated-hero-bottom .block-2 .shape-01'],
      translateY: [200, 0],
      duration: 1000,
      easing: 'easeOutBack',
    })
    // Shape 02
    anime({
      targets: ['.animated-hero-bottom .block-2 .shape-02'],
      translateY: [-200, 0],
      duration: 1000,
      easing: 'easeOutBack',
    })

  }, [])

  const animate = useCallback(() => {
    animateIn()

    anime({
      targets: '.animated-hero-bottom .mongosteen-01',
      keyframes: [
        { rotateX: 0 },
        { rotateX: 15 },
        { rotateX: 0 },
        { rotateX: 0 },
      ],
      loop: true,
      easing: 'linear',
      duration: 2000
    })

    anime({
      targets: '.animated-hero-bottom .mongosteen-02',
      keyframes: [
        { rotateX: 0 },
        { rotateX: 25 },
        { rotateX: -10 },
        { rotateX: 0 },
      ],
      loop: true,
      easing: 'linear',
      duration: 2000
    })

    anime({
      targets: '.animated-hero-bottom .red-leaf',
      keyframes: [
        { rotateY: 0, rotateZ: 0 },
        { rotateY: 0, rotateZ: 0 },
        { rotateY: 10, rotateZ: 1 },
        { rotateY: 5, rotateZ: 1 },
        { rotateY: 0, rotateZ: 0 },
        { rotateY: 0, rotateZ: 0 },
        { rotateY: 0, rotateZ: 0 },
      ],
      loop: true,
      easing: 'linear',
      duration: 5000
    })

    // Block 4
    anime({
      targets: ['.animated-hero-bottom .block-4 .pink-leaf'],
      transformOrigin: ['50%', '90%'], // Set the rotation center to the center of the object
      keyframes: [
        { scale: 1 },
        { scale: 0.95 },
        { scale: 1 },
      ],
      loop: true,
      duration: 5000,
    })

    anime({
      targets: ['.animated-hero-bottom .block-4 .green-leaf'],
      transformOrigin: ['50%', '90%'], // Set the rotation center to the center of the object
      keyframes: [
        { scale: 1 },
        { scale: 0.9 },
        { scale: 1 },
      ],
      loop: true,
      duration: 6000,
    })
  }, [animateIn])

  // useEffect(() => {
  //   const shapeTimeline = anime.timeline({
  //     endDelay: 1000,
  //     easing: 'easeInOutQuad',
  //     direction: 'alternate',
  //     loop: true
  //   })

  //   shapeTimeline
  //     .add({ targets: '.shape-02',  fill: '#5F01D1' }, 0)
  //     .add({ targets: '.shape-02',  fill: '#FFC801' }, 0)
  //     .add({ targets: '.shape-02',  fill: '#5F01D1' }, 0)
  // }, [])

  return (
    <svg viewBox="0 0 1025 260" fill="none" className="animated-hero-bottom" xmlns="http://www.w3.org/2000/svg">

      <g className="block-2" clipPath="url(#clip0_772_872)">
        <path className="pink-block" d="M767.431 0H255.81V259.6H767.431V0Z" fill="#EF82EB"/>
        <path className="blue-block" d="M511.365 129.8H255.81V259.6H511.365V129.8Z" fill="#00B4D5"/>
        <path className="shape-01 shape-00" d="M766.903 259.6C696.331 259.6 639.134 201.489 639.134 129.8V0C709.706 0 766.903 58.1116 766.903 129.8V259.6Z" fill="#FFC801"/>
        <path className="shape-02 shape-00" d="M639.134 259.6C568.562 259.6 511.365 201.489 511.365 129.8V0C581.92 0 639.134 58.1116 639.134 129.8V259.6Z" fill="#5F01D1"/>
        <path className="red-leaf" d="M255.81 259.6C255.81 161.798 333.862 82.5024 430.127 82.5024C430.127 180.305 352.076 259.583 255.81 259.583V259.6Z" fill="#F8572B"/>
        <path d="M301.183 53.4037C305.954 53.4037 309.821 49.4786 309.821 44.6367C309.821 39.7948 305.954 35.8696 301.183 35.8696C296.412 35.8696 292.544 39.7948 292.544 44.6367C292.544 49.4786 296.412 53.4037 301.183 53.4037Z" fill="white"/>
        <path d="M354.035 53.4037C358.806 53.4037 362.673 49.4786 362.673 44.6367C362.673 39.7948 358.806 35.8696 354.035 35.8696C349.264 35.8696 345.397 39.7948 345.397 44.6367C345.397 49.4786 349.264 53.4037 354.035 53.4037Z" fill="white"/>
        <path d="M406.904 53.4037C411.675 53.4037 415.543 49.4786 415.543 44.6367C415.543 39.7948 411.675 35.8696 406.904 35.8696C402.134 35.8696 398.266 39.7948 398.266 44.6367C398.266 49.4786 402.134 53.4037 406.904 53.4037Z" fill="white"/>
        <path d="M468.395 44.6367C468.395 49.4807 464.527 53.4037 459.757 53.4037C454.986 53.4037 451.118 49.4807 451.118 44.6367C451.118 39.7926 454.986 35.8696 459.757 35.8696C464.527 35.8696 468.395 39.7926 468.395 44.6367Z" fill="white"/>
      </g>

      <path d="M255.811 0.0683594H0V259.532H255.811V0.0683594Z" fill="#00B4D5"/>
      <g className="mangosteen" clipPath="url(#clip1_772_872)">
        <path d="M127.837 259.6C197.329 259.6 253.664 203.234 253.664 133.704C253.664 64.1733 197.329 7.80762 127.837 7.80762C58.345 7.80762 2.0105 64.1733 2.0105 133.704C2.0105 203.234 58.345 259.6 127.837 259.6Z" fill="#5F01D1"/>
        <path className="mongosteen-01" d="M127.837 7.39844C127.837 7.39844 116.473 136.21 255.759 136.21C255.759 136.21 261.995 7.39844 127.837 7.39844Z" fill="#00CE7F"/>
        <path className="mongosteen-02" d="M127.888 7.39844C127.888 7.39844 139.508 136.193 0.204455 136.193C0.204455 136.193 -6.33819 7.39844 127.888 7.39844Z" fill="#04A869"/>
        <path d="M128.144 0H117.802V18.2238H128.144V0Z" fill="#04A869"/>
        <path d="M138.469 0H128.127V18.2238H138.469V0Z" fill="#00CE7F"/>
      </g>

      <g className="block-4" clipPath="url(#clip2_772_872)">
        <path d="M1025 0H767V260H1025V0Z" fill="#5F01D1"/>
        <g className="pink-leaf">
          <path className="pink-leaf-l" d="M896.091 259.362C896.091 259.362 907.3 130.09 767 130.09C767 130.09 782.502 264.598 896.091 259.362Z" fill="#EF82EB"/>
          <path className="pink-leaf-r" d="M896.091 259.362C896.091 259.362 884.405 130.09 1024.71 130.09C1024.71 130.09 1009.68 264.598 896.091 259.362Z" fill="#EF82EB"/>
        </g>
        <g className="green-leaf">
          <path className="green-leaf-l" d="M896.091 129.271C896.091 129.271 907.3 0 767 0C767 0 782.502 134.508 896.091 129.271Z" fill="#00CE7F"/>
          <path className="green-leaf-r" d="M896.091 129.271C896.091 129.271 884.405 0 1024.71 0C1024.71 0 1009.68 134.508 896.091 129.271Z" fill="#00CE7F"/>
        </g>
      </g>

      <defs>
      <clipPath id="clip0_772_872">
      <rect width="511.621" height="259.6" fill="white" transform="translate(255.81)"/>
      </clipPath>
      <clipPath id="clip1_772_872">
      <rect width="255.811" height="259.6" fill="white"/>
      </clipPath>
      <clipPath id="clip2_772_872">
      <rect width="257.705" height="259.6" fill="white" transform="translate(767)"/>
      </clipPath>
      </defs>
      </svg>
  )
}

export default AnimatedHeroSvgBottom