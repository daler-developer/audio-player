import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { selectCurrentAudioDuration, selectCurrentTime } from 'redux/features/playerReducer'


const Slider = (props) => {
  const [mouseDown, setMouseDown] = useState(false)

  const circleRef = useRef(null)
  const progressRef = useRef(null)
  const mouseMoveHandlerRef = useRef(null)

  useEffect(() => {
    mouseMoveHandlerRef.current = (e) => {
      const circleRect = circleRef.current.getBoundingClientRect()
      const progressRect = progressRef.current.getBoundingClientRect()

      let x

      if (e.pageX < progressRect.x) {
        x = 0
      } else if (e.pageX > progressRect.right) {
        x = progressRect.right - progressRect.x
      } else {
        x = e.pageX - progressRect.x
      }

      circleRef.current.style.left = `${x}px`
    }
  }, [])

  useEffect(() => {

    if (mouseDown) {

      document.addEventListener('pointerup', (e) => {
        const circleRect = circleRef.current.getBoundingClientRect()
        const progressRect = progressRef.current.getBoundingClientRect()

        const percentage = ((circleRect.x + 10 - progressRect.x) / progressRect.width) * 100
        const time = (percentage / 100) * props.duration

        document.querySelector('.native-audio').currentTime = time

        setMouseDown(false)
      }, { once: true })

      document.addEventListener('pointermove', mouseMoveHandlerRef.current)

    } else {

      document.removeEventListener('pointermove', mouseMoveHandlerRef.current)

    }
  }, [mouseDown])

  useEffect(() => {
    if (!mouseDown) {
      const percentage = (props.currentTime / props.duration) * 100
      circleRef.current.style.left = `${percentage}%`
    }
  }, [props.currentTime])

  const duration = {
    minutes: Math.floor(props.duration / 60),
    seconds: Math.floor(props.duration) - Math.floor(props.duration / 60) * 60
  }

  const currentTime = {
    minutes: Math.floor(props.currentTime / 60),
    seconds: Math.floor(props.currentTime) - Math.floor(props.currentTime / 60) * 60
  }

  return (
    <div className={'slider'}>

      <div className={'slider__progress-wrapper'}>
        <div className={'slider__progress'} ref={progressRef}>
          <motion.div
            ref={circleRef}
            className={'slider__move-circle'}
            onPointerDown={() => setMouseDown(true)}
            onDragStart={(e) => e.preventDefault()}
          >
          </motion.div>
        </div>
      </div>

      <div className={'slider__times'}>
        <span className={'slider__current-time'}>
          {currentTime.minutes}:{currentTime.seconds < 10 && '0'}{currentTime.seconds}
        </span>
        <span className={'slider__duration'}>
          {duration.minutes}:{duration.seconds < 10 && '0'}{duration.seconds}
        </span>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  duration: selectCurrentAudioDuration(state),
  currentTime: selectCurrentTime(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
