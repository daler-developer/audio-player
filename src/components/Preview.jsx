import { connect } from 'react-redux'
import { audios, selectSelectedAudioIndex } from 'redux/features/playerReducer'


const Preview = (props) => {
  return (
    <div className={'preview'}>
      <img
        className={'preview__img'}
        src={props.currentAudio.img}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentAudio: audios[selectSelectedAudioIndex(state)]
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)

