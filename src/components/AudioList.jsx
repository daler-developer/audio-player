import { connect } from 'react-redux'
import { audios, selectAudioListVisibility, setSelectedAudioIndex } from 'redux/features/playerReducer'


const AudioList = (props) => {
  const changeAudio = (to) => {
    props.setSelectedAudioIndex({ to })
  }

  return (
    <div className={`audio-list ${!props.visibility ? 'audio-list--hidden' : ''}`}>
      <ul className={'audio-list__list'}>
        {audios.map(audio => (
          <li key={audio.name} className={'audio-list__audio'} onClick={() => changeAudio(audios.indexOf(audio))}>
            <img src={audio.img} className={'audio-list__audio-img'} />
            <span className={'audio-list__audio-name'}>
              {audio.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  visibility: selectAudioListVisibility(state)
})

const mapDispatchToProps = {
  setSelectedAudioIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioList)
