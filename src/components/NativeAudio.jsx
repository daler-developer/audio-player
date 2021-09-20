import { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { audios, selectIsMuted, selectIsPaused, selectSelectedAudioIndex } from 'redux/features/playerReducer'


const NativeAudio = (props) => {
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current.volume = props.isMuted ? 0 : 1; 
  }, [props.isMuted])

  useEffect(() => {
    if (!props.isPaused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [props.isPaused, props.selectedAudioIndex])

  return (
    <audio
      src={props.currentAudio.src}
      controls
      className={'native-audio'}
      ref={audioRef}
    >
    </audio>
  )
}

const mapStateToProps = (state) => ({
  isPaused: selectIsPaused(state),
  currentAudio: audios[selectSelectedAudioIndex(state)],
  selectedAudioIndex: selectSelectedAudioIndex(state),
  isMuted: selectIsMuted(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NativeAudio)
