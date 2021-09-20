import { connect } from 'react-redux'
import { selectShadeVisibility, toggleShadeVisibility, toggleAudioListVisibility } from 'redux/features/playerReducer'


const Shade = (props) => {
  const hide = () => {
    props.toggleShadeVisibility()
    props.toggleAudioListVisibility()
  }

  return (
    <div className={`shade ${!props.visibility ? 'shade--hidden' : ''}`} onClick={hide}>
      
    </div>
  )
}

const mapStateToProps = (state) => ({
  visibility: selectShadeVisibility(state)
})

const mapDispatchToProps = {
  toggleShadeVisibility, toggleAudioListVisibility
}

export default connect(mapStateToProps, mapDispatchToProps)(Shade)
