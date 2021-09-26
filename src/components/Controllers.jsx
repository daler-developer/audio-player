import { motion } from 'framer-motion'
import { useRef } from 'react'
import { connect } from 'react-redux'
import { selectIsPaused, toggleIsPaused, setSelectedAudioIndex, selectSelectedAudioIndex, audios, selectIsMuted, selectInfinityModeActive, toggleInfinityModeActive } from 'redux/features/playerReducer'


const Controllers = (props) => {
  const downloadBtnRef = useRef(null)

  const audiosCount = audios.length

  const playMusic = () => props.toggleIsPaused()
  const pauseMusic = () => props.toggleIsPaused()

  const playNext = () => {
    if ((props.selectedAudioIndex + 1) === audiosCount) {
      props.setSelectedAudioIndex({ to: 0 })
    } else {
      props.setSelectedAudioIndex({ to: props.selectedAudioIndex + 1 })
    }
  }

  const playPrev = () => {
    if (props.selectedAudioIndex === 0) {
      props.setSelectedAudioIndex({ to: audios.length - 1 })
    } else {
      props.setSelectedAudioIndex({ to: props.selectedAudioIndex - 1 })
    }
  }

  const downloadAudio = () => {
    fetch(document.querySelector('.native-audio').src)
      .then(resp => resp.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob)
        downloadBtnRef.current.href = url
        downloadBtnRef.current.click()
      })
  }

  const toggleInfinityMode = () => {
    props.toggleInfinityModeActive()
  }

  return (
    <div className={'controllers'}>

      <a href={'#'} ref={downloadBtnRef} download={'audio.mp3'} hidden></a>

      <div className={'controllers__left'}>
        <motion.button className={'controllers__download-btn controllers__btn'} onClick={downloadAudio} whileTap={{ scale: .9 }}>
          <i className={'controllers__icon controllers__download-icon icon-download'}></i>
        </motion.button>
      </div>
      
      <div className={'controllers__center'}>

        <motion.button className={'controllers__prev-btn controllers__btn'} onClick={playPrev} whileTap={{ scale: .9 }}>
          <i className={'icon-prev controllers__icon controllers__prev-icon'}></i>
        </motion.button>

        <motion.button 
          className={'controllers__play-pause-btn controllers__btn'}
          type={'button'}
          onClick={props.isPaused ? playMusic : pauseMusic}
          whileTap={{ scale: .9 }}
        >
          <i className={`controllers__icon ${props.isPaused ?
            'icon-play controllers__play-icon' : 'icon-pause controllers__pause-icon'}`}
          ></i>
        </motion.button>

        <motion.button className={'controllers__next-btn controllers__btn'} onClick={playNext} whileTap={{ scale: .9 }}>
          <i className={'icon-next controllers__icon controllers__next-icon'}></i>
        </motion.button>

      </div>

      <div className={'controllers__right'}>
        <motion.button className={'controllers__btn'} onClick={toggleInfinityMode} whileTap={{ scale: .9 }}>
          <i className={`controllers__icon controllers__infinity-icon icon-infinity ${props.infinityModeActive && 'controllers__icon-infinity--active'}`}></i>
        </motion.button>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  isPaused: selectIsPaused(state),
  selectedAudioIndex: selectSelectedAudioIndex(state),
  infinityModeActive: selectInfinityModeActive(state)
})

const mapDispatchToProps = {
  toggleIsPaused, setSelectedAudioIndex, toggleInfinityModeActive
}

export default connect(mapStateToProps, mapDispatchToProps)(Controllers)
