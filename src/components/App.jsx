import 'scss/index.scss'

import Header from "./Header"
import Preview from "./Preview"
import Controllers from "./Controllers"
import NativeAudio from "./NativeAudio"
import Slider from "./Slider"
import AudioList from "./AudioList"
import Shade from "./Shade"
import AudioInfo from './AudioInfo'


const App = () => {
  return (
    <div className={'app'}>
      <Header />
      <main className={'app__body'}>
        <Preview />
        <AudioInfo />
        <Slider />
        <Controllers />
      </main>

      <AudioList />
      <NativeAudio />
      <Shade />
    </div>
  )
}

export default App
