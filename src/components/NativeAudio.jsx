import { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { audios, selectIsMuted, selectIsPaused, setCurrentTime, selectSelectedAudioIndex, setSelectedAudioIndex, setCurrentAudioDuration, selectInfinityModeActive, selectCurrentTime } from 'redux/features/playerReducer'


const NativeAudio = (props) => {
  const audioRef = useRef(null)

  const handleEnded = () => {
    if (props.infinityModeActive) {
      audioRef.current.currentTime = 0
    } else {
      if ((props.selectedAudioIndex + 1) === audios.length) {
        props.setSelectedAudioIndex({ to: 0 })
      } else {
        props.setSelectedAudioIndex({ to: props.selectedAudioIndex + 1 })
      }
    }
  }

  const handleDurationChange = (e) => {
    props.setCurrentAudioDuration({ to: audioRef.current.duration })
  }

  const handleCurrentTimeChange = (e) => {
    props.setCurrentTime({ to: e.target.currentTime })
    if (!props.isPaused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
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
  }, [props.isPaused])

  useEffect(() => {
    if (!props.isPaused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [props.selectedAudioIndex])

  return (
    <audio
      src={props.currentAudio.src}
      controls
      className={'native-audio'}
      ref={audioRef}
      onEnded={handleEnded}
      onDurationChange={handleDurationChange}
      onTimeUpdate={handleCurrentTimeChange}
    >
    </audio>
  )
}

const mapStateToProps = (state) => ({
  isPaused: selectIsPaused(state),
  currentAudio: audios[selectSelectedAudioIndex(state)],
  selectedAudioIndex: selectSelectedAudioIndex(state),
  isMuted: selectIsMuted(state),
  infinityModeActive: selectInfinityModeActive(state),
  currentTime: selectCurrentTime(state)
})

const mapDispatchToProps = { setSelectedAudioIndex, setCurrentAudioDuration, setCurrentTime }

export default connect(mapStateToProps, mapDispatchToProps)(NativeAudio)
