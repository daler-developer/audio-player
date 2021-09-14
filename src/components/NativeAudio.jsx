import { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { selectAudioSrc, selectIsPaused } from 'redux/features/playerReducer'


const NativeAudio = (props) => {
  const audioRef = useRef(null)

  useEffect(() => {
    if (props.isPaused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [props.isPaused])

  return (
    <audio
      src={props.src}
      controls
      className={'native-audio'}
      ref={audioRef}
    >
    </audio>
  )
}

const mapStateToProps = (state) => ({
  isPaused: selectIsPaused(state),
  src: selectAudioSrc(state)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NativeAudio)
