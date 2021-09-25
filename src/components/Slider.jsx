import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { selectCurrentAudioDuration } from 'redux/features/playerReducer'


const Slider = (props) => {
  const circleRef = useRef(null)
  const progressRef = useRef(null)
  const [isMouseDown, setIsMouseDown] = useState(false)

  let moveListener;

  const initDrag = (e) => {
    setIsMouseDown(true)
    moveListener = document.addEventListener('mousemove', moveCircle)
  }

  const endDrag = (e) => {
    setIsMouseDown(false)
    document.removeEventListener('mousemove', moveListener)
  }

  const moveCircle = (e) => {
    const progressRect = progressRef.current.getBoundingClientRect()
    const circleRect = circleRef.current.getBoundingClientRect()
    const left = (e.clientX - progressRect.x) - (circleRect.width / 2)
    circleRef.current.style.left = `${left}px`
  }

  const duration = {
    minutes: Math.floor(props.duration / 60),
    seconds: Math.floor(props.duration) - Math.floor(props.duration / 60) * 60
  }

  return (
    <div className={'slider'}>

      <div className={'slider__progress-wrapper'}>
        <div className={'slider__progress'} ref={progressRef}>
          <div
            ref={circleRef}
            className={'slider__move-circle'}
            onMouseDown={initDrag}
            onMouseUp={endDrag}
          ></div>
        </div>
      </div>

      <div className={'slider__times'}>
        <span className={'slider__current-time'}>
          1:40
        </span>
        <span className={'slider__duration'}>
          {duration.minutes}:{duration.seconds < 10 && '0'}{duration.seconds}
        </span>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  duration: selectCurrentAudioDuration(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
