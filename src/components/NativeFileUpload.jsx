import { useRef } from 'react'
import { connect } from 'react-redux'
import { setAudioSrc } from 'redux/features/playerReducer'


const NativeFileUpload = (props) => {
  const file = useRef(null)

  const changeAudio = () => {
    const url = URL.createObjectURL(file.current.files[0])
    props.setAudioSrc({ src: url})
  }

  return (
    <input
      type={'file'}
      className={'native-file-upload'}
      onChange={changeAudio}
      ref={file}
    />
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  setAudioSrc
}

export default connect(mapStateToProps, mapDispatchToProps)(NativeFileUpload)
