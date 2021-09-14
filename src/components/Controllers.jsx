import { connect } from 'react-redux'
import { selectIsPaused } from 'redux/features/playerReducer'
import { toggleIsPaused } from 'redux/features/playerReducer'


const Controllers = (props) => {

  const playMusic = () => {
    props.toggleIsPaused()
  }

  const pauseMusic = () => {
    props.toggleIsPaused()
  }

  const trigger = () => {
    document.querySelector('.native-file-upload').click()
  }

  return (
    <div className={'controllers'}>
      
      <div className={'controllers__center'}>
        <button 
          className={'controllers__play-pause-btn'}
          type={'button'}
          onClick={props.isPaused ? playMusic : pauseMusic}
        >
          {props.isPaused ? 'Play' : 'Pause'}
        </button>
        <button
          onClick={trigger}
        >
          Upload
        </button>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  isPaused: selectIsPaused(state)  
})

const mapDispatchToProps = {
  toggleIsPaused
}

export default connect(mapStateToProps, mapDispatchToProps)(Controllers)
