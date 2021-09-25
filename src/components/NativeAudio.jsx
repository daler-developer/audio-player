import { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { audios, selectIsMuted, selectIsPaused, selectSelectedAudioIndex, setSelectedAudioIndex, setCurrentAudioDuration } from 'redux/features/playerReducer'


const NativeAudio = (props) => {
  const audioRef = useRef(null)

  const handleEnded = () => {
    if ((props.selectedAudioIndex + 1) === audios.length) {
      props.setSelectedAudioIndex({ to: 0 })
    } else {
      props.setSelectedAudioIndex({ to: props.selectedAudioIndex + 1 })
    }
  }

  const handleDurationChange = (e) => {
    props.setCurrentAudioDuration({ to: audioRef.current.duration })
  }

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
      onEnded={handleEnded}
      onDurationChange={handleDurationChange}
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

const mapDispatchToProps = { setSelectedAudioIndex, setCurrentAudioDuration }

export default connect(mapStateToProps, mapDispatchToProps)(NativeAudio)
