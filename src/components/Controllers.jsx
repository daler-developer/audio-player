import { connect } from 'react-redux'
import { selectIsPaused, toggleIsMuted, toggleShadeVisibility, toggleAudioListVisibility,  toggleIsPaused, setSelectedAudioIndex, selectSelectedAudioIndex, audios, selectIsMuted } from 'redux/features/playerReducer'


const Controllers = (props) => {

  const audiosCount = audios.length

  const playMusic = () => props.toggleIsPaused()
  const pauseMusic = () => props.toggleIsPaused()

  const openAudioList = () => {
    props.toggleAudioListVisibility()
    props.toggleShadeVisibility()
  }

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

  const toggleAudioMuted = () => {
    props.toggleIsMuted()
  }

  return (
    <div className={'controllers'}>

      <div className={'controllers__left'}>
        <button className={'controllers__toggle-volume-btn'} onClick={toggleAudioMuted}>
          <i className={`controllers__icon ${props.isMuted ? 'icon-volume-off' : 'icon-volume-on'}`}></i>
        </button>
      </div>
      
      <div className={'controllers__center'}>

        <button className={'controllers__prev-btn'} onClick={playPrev}>
          <i className={'icon-prev controllers__icon controllers__prev-icon'}></i>
        </button>

        <button 
          className={'controllers__play-pause-btn'}
          type={'button'}
          onClick={props.isPaused ? playMusic : pauseMusic}
        >
          <i className={`controllers__icon ${props.isPaused ?
            'icon-play contollers__play-icon' : 'icon-pause controllers__pause-icon'}`}
          ></i>
        </button>

        <button className={'controllers__next-btn'} onClick={playNext}>
          <i className={'icon-next controllers__icon controllers__next-icon'}></i>
        </button>

      </div>

      <div className={'controllers__right'}>
        <button className={'controllers__open-audio-list-btn'} onClick={openAudioList}>
          <i className={'controllers__icon icon-list'}></i>
        </button>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  isPaused: selectIsPaused(state),
  selectedAudioIndex: selectSelectedAudioIndex(state),
  isMuted: selectIsMuted(state)
})

const mapDispatchToProps = {
  toggleIsPaused, setSelectedAudioIndex, toggleAudioListVisibility, toggleShadeVisibility, toggleIsMuted
}

export default connect(mapStateToProps, mapDispatchToProps)(Controllers)
