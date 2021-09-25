import { connect } from 'react-redux'
import { audios, selectSelectedAudioIndex } from 'redux/features/playerReducer'


const AudioInfo = (props) => {
  return (
    <div className={'audio-info'}>
      <h2 className={'audio-info__audio-name h4'}>
        {audios[props.selectedAudioIndex].name}
      </h2>
      <span className={'audio-info__audio-author'}>
        {audios[props.selectedAudioIndex].author}
      </span>
    </div>
  )
}

const mapStateToProps = (state) => ({
  selectedAudioIndex: selectSelectedAudioIndex(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AudioInfo)

