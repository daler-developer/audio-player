import { connect } from 'react-redux'
import { audios, selectAudioListVisibility, selectSelectedAudioIndex, setSelectedAudioIndex, toggleAudioListVisibility, toggleShadeVisibility } from 'redux/features/playerReducer'


const AudioList = (props) => {
  const changeAudio = (to) => {
    props.setSelectedAudioIndex({ to })
    props.toggleAudioListVisibility()
    props.toggleShadeVisibility()
  }

  return (
    <div className={`audio-list ${!props.visibility ? 'audio-list--hidden' : ''}`}>
      <ul className={'audio-list__list'}>
        {audios.map(audio => {
          const index = audios.indexOf(audio)

          return (
            <li key={audio.name} className={'audio-list__audio'} onClick={() => changeAudio(index)}>
              <div className={'audio-list__audio-left'}>
                <img src={audio.img} className={'audio-list__audio-img'} />
                <div className={'audio-list__audio-body'}>
                  <span className={'audio-list__audio-name'}>{audio.name}</span>
                  <span className={'audio-list__audio-author'}>{audio.author}</span>
                </div>
              </div>
              <div className={`audio-list__animation ${props.selectedAudioIndex !== index && 'audio-list__animation--hidden'}`}>
                <div className={'audio-list__animation-block'}></div>
                <div className={'audio-list__animation-block'}></div>
                <div className={'audio-list__animation-block'}></div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  visibility: selectAudioListVisibility(state),
  selectedAudioIndex: selectSelectedAudioIndex(state)
})

const mapDispatchToProps = {
  setSelectedAudioIndex, toggleAudioListVisibility, toggleShadeVisibility
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioList)
