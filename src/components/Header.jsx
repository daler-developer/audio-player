import { connect } from "react-redux"
import { selectIsMuted, toggleIsMuted, toggleAudioListVisibility, toggleShadeVisibility } from "redux/features/playerReducer"

const Header = (props) => {

  const toggleAudioMuted = () => {
    props.toggleIsMuted()
  }

  const openList = () => {
    props.toggleAudioListVisibility()
    props.toggleShadeVisibility()
  }

  return (
    <header className={'header'}>

      <div className={'header__left'}>
        <button className={'header__toggle-volume-btn header__btn'} onClick={toggleAudioMuted}>
          <i className={`header__icon ${props.isMuted ? 'icon-volume-off' : 'icon-volume-on'}`}></i>
        </button>
      </div>

      <div className={'header__center'}>
        <h1 className={'header__title h5'}>React Player</h1>
      </div>

      <div className={'header__right'}>
        <button className={'header__show-list-btn header__btn'} onClick={openList}>
          <i className={'icon-list header__icon'}></i>
        </button>
      </div>

    </header>
  )
}

const mapStateToProps = (state) => ({
  isMuted: selectIsMuted(state)
})

const mapDispatchToProps = {
  toggleIsMuted, toggleShadeVisibility, toggleAudioListVisibility
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
