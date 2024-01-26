import { useCallback, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import Highlight from 'react-highlight'
import 'highlight.js/styles/github.css'

type HeadLine = {
  message: string,
  // Animation from Tailwind CSS, please update the list if Tailwind CSS has new animation
  iconAnimation?: 'animate-bounce' | 'animate-pulse' | 'animate-spin' | 'animate-ping' | 'animate-pulse' | 'animate-none'
  iconAnimationDuration?: string
  iconName?: string
  iconColor?: string
  bounce?: boolean
  link?: string
}

const HEADLINE: Array<HeadLine> = [
  { message: 'print("We are back!")', iconName: 'fluent:sparkle-32-filled', iconAnimation: 'animate-bounce', iconColor: '#ffc801', iconAnimationDuration: '0.75s' },
  { message: 'print("Hello world")', iconName: 'noto-v1:globe-showing-asia-australia', iconAnimation: 'animate-spin', iconColor: '#2C5A7E', iconAnimationDuration: '0.5s' },
  { message: 'CHIPI CHIPI CHAPA CHAPA DUBI DUBI DABA DABA', iconName: 'fluent-emoji:cat-face', iconAnimation: 'animate-bounce', iconColor: '#faa', iconAnimationDuration: '1s', bounce: true, link: 'https://www.youtube.com/embed/wh9QLjk3M2k?si=4unUv3bo7vsV1f5-&autoplay=1' },
  { message: 'from around_the_world import Python_Developer', iconName: 'bi:keyboard-fill', iconAnimation: 'animate-spin', iconColor: '#aaa', iconAnimationDuration: '15s' },
  { message: 'We wish you a happy new year.', iconName: 'solar:heart-bold', iconAnimation: 'animate-pulse', iconColor: '#faa', iconAnimationDuration: '1s', bounce: false },
  { message: 'See you again in Q1/2025', iconName: 'openmoji:motor-boat', iconAnimation: 'animate-bounce', iconColor: '#aaa', iconAnimationDuration: '1s', bounce: false },
]

const today = new Date()

if (today.getDate() === 25 && today.getMonth() === 11) {
  HEADLINE.push(
    { message: 'We wish you merry christmas.', iconName: 'streamline-emojis:christmas-tree', iconAnimation: 'animate-pulse', iconColor: '#22ffaa', iconAnimationDuration: '0.75s' },
    { message: 'Jingle bells, jingle bells Jingle all the way.', iconName: 'fluent:sparkle-32-filled', iconAnimation: 'animate-spin', iconColor: '#ffc801', iconAnimationDuration: '0.75s' },
  )
}

const TYPING_SPEED = 25
const WAITING_TIME = 3000
let LAST_INDEX_PLAYLIST = -1

const AnimatedHeadLine = () => {
  const [isLoad, setIsLoad] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [headLineIndex, setHeadLineIndex] = useState(-1)

  const [isEndOfTextRound, setIsEndOfTextRound] = useState(true)

  const [isWaiting, setIsWaiting] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [isRemoving, setIsRemoving] = useState(false)

  const [headLinePlaylist, setHeadLinePlaylist] = useState<number[]>([])
  const [headLinePlaylistIndex, setHeadLinePlaylistIndex] = useState(-1)
  const [isEndOfRound, setIsEndOfRound] = useState(true)
  const [link, setLink] = useState<string|null>(null)

  const showIcon = () => {
    if (!HEADLINE[headLineIndex].iconName) {
      return null
    }

    return (
        <div className={`inline-block ${HEADLINE[headLineIndex].bounce !== false ? 'animate-bounce' : '' }`} style={{ animationDuration: '0.5s' }}>
          <Icon
            icon={HEADLINE[headLineIndex].iconName}
            className={`${HEADLINE[headLineIndex].iconAnimation} mx-2 inline`}
            style={{
              animationDuration: HEADLINE[headLineIndex].iconAnimationDuration,
              color: HEADLINE[headLineIndex].iconColor,
            }}
          />
        </div>
      )
  }

  // Get random headline playlist
  const createHeadlinePlaylist = useCallback((): Array<number> => {
    const sequence: Array<number> = []
    for (let i = 0; i < HEADLINE.length; i++) {
      // To avoid duplicate headline
      let randomIndex = Math.floor(Math.random() * HEADLINE.length)
      // console.log('randomIndex', randomIndex)
      // console.log('randomIndex === LAST_INDEX_PLAYLIST', randomIndex === LAST_INDEX_PLAYLIST)
      // console.log('LAST_INDEX_PLAYLIST', LAST_INDEX_PLAYLIST)

      // To avoid duplicate headline, and the last index of previous playlist
      while (sequence.includes(randomIndex) || (i === 0 && randomIndex === LAST_INDEX_PLAYLIST)) {
        randomIndex = Math.floor(Math.random() * HEADLINE.length)
      }
      sequence.push(randomIndex)
    }
    return sequence
  }, [])

  // Get next headline index
  const getNextHeadlineIndex = useCallback(() => {
    const nextPlaylistIndex = headLinePlaylistIndex + 1
    if (nextPlaylistIndex >= headLinePlaylist.length) {
      setIsEndOfRound(true)
      setHeadLinePlaylistIndex(0)
      return
    }

    setHeadLinePlaylistIndex(nextPlaylistIndex)
  }, [headLinePlaylist.length, headLinePlaylistIndex])

  // Start
  useEffect(() => {
    setIsLoad(true)
  }, [])

  // Initiate headline playlist
  useEffect(() => {
    if (isLoad && isEndOfRound) {
      // Setup playlist
      // Will setup sequence of headline
      const playlist = createHeadlinePlaylist()
      setHeadLinePlaylist(playlist)
      LAST_INDEX_PLAYLIST =playlist[playlist.length - 1]
      return
    }
  }, [isLoad, isEndOfRound, createHeadlinePlaylist])

  // Animation
  const animate = useCallback(() => {
    const currentText = HEADLINE[headLineIndex].message

    if (!isEndOfTextRound) {
      if (!isWaiting && !isRemoving) {
        setIsTyping(true)
      }
    }

    // typing
    function typing() {
      const _index = index + 1
        if (_index <= currentText.length) {
          setText(currentText.slice(0, _index))
          setIndex(_index)
          setIsTyping(true)
          return
        } else {
          setIsTyping(false)
          setIsWaiting(true)
        }
    }

    // removing
    function removing() {
      const _index = index - 1
      if (_index >= 0) {
        setText(currentText.slice(0, _index))
        setIndex(_index)
        setIsRemoving(true)
        // setIsTyping(false)
        // setIsEndOfTextRound(false)
        return
      } else {
        setIsRemoving(false)
        setIsEndOfTextRound(true)
        setIsAnimating(false)
        getNextHeadlineIndex()
      }
    }

    setTimeout(() => {
      if (!isAnimating) {
        return
      }

      // Animate typing
      if (isTyping) {
        typing()
        return
      }

      if (isRemoving) {
        removing()
        return
      }

      if (isWaiting) {
        setTimeout(() => {
          setIsWaiting(false)
          setIsRemoving(true)
        }, WAITING_TIME)
      }

      // Animate removing
    }, TYPING_SPEED)

  }, [getNextHeadlineIndex, headLineIndex, index, isAnimating, isEndOfTextRound, isRemoving, isTyping, isWaiting])


  useEffect(() => {
    // console.log('Playlist', headLinePlaylist)

    if (headLinePlaylist.length > 0 && isEndOfRound) {
      setIsEndOfRound(false)
      getNextHeadlineIndex()
      return
    }
  }, [getNextHeadlineIndex, headLinePlaylist, headLinePlaylist.length, isEndOfRound])

  useEffect(() => {
    // console.log('> HEADLINE INDEX', headLineIndex)

    if (headLinePlaylistIndex >= 0 && !isAnimating) {
      // Set next headline index
      const nextIndex = headLinePlaylist[headLinePlaylistIndex]
      setHeadLineIndex(nextIndex)

      // Set link if available
      const _link = HEADLINE[nextIndex].link
      if (_link !== undefined) {
        setLink(_link)
      } else {
        setLink(null)
      }

      setIsAnimating(true)
      setIsEndOfTextRound(false)
    }
  }, [headLinePlaylist, headLinePlaylistIndex, isAnimating])

  useEffect(() => {
    if (headLineIndex >= 0 && isAnimating) {
      animate()
    }
  }, [headLineIndex, animate, isAnimating])

  return (
    <div className={"text-3xl lg:text-4xl font-black"}>

      {/* <div>
        <p className="text-sm">isTyping: {isTyping.toString()}</p>
        <p className="text-sm">isEndOfTextRound: {isEndOfTextRound.toString()}</p>
        <p className="text-sm">isWaiting: {isWaiting.toString()}</p>
        <p className="text-sm">isRemoving: {isRemoving.toString()}</p>
        <p className="text-sm">isAnimating: {isAnimating.toString()}</p>
      </div> */}

      <div
        className={`
          flex flex-row flex-wrap text-black py-4 flex-1
          ${link !== null ? 'cursor-pointer hover:underline' : ''}
        `}
        onClick={() => {
          if (link !== null) {
            window.open(link, '_blank')
          }
        }}
      >
        <Highlight innerHTML={false} className="python whitespace-pre-wrap text-3xl max-md:text-3xl !w-fit !bg-transparent !px-0">
            {text + '_'}
        </Highlight>
        <div className="flex-1 flex">
          {isWaiting && showIcon()}
          {/* <span className="text-white bg-black w-6 text-3xl inline-block animate-pulse" style={{ animationDuration: '0.5s' }}>&nbsp;</span> */}
        </div>
      </div>
    </div>
  )
}

export default AnimatedHeadLine
