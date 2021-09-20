import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'


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

  return (
    <div className={'slider'}>
      <div className={'slider__progress'} ref={progressRef}>
        <div
          ref={circleRef}
          className={'slider__move-circle'}
          onMouseDown={initDrag}
          onMouseUp={endDrag}
        ></div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
