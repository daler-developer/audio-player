import { connect } from 'react-redux'
import { audios, selectSelectedAudioIndex } from 'redux/features/playerReducer'


const Preview = (props) => {
  return (
    <img
      className={'preview'}
      src={props.currentAudio.img}
    />
  )
}

const mapStateToProps = (state) => ({
  currentAudio: audios[selectSelectedAudioIndex(state)]
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)

