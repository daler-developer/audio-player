import Header from "./Header"
import 'scss/index.scss'
import Footer from "./Footer"
import Preview from "./Preview"
import Controllers from "./Controllers"
import NativeAudio from "./NativeAudio"
import NativeFileUpload from "./NativeFileUpload"


const App = () => {
  return (
    <div className={'app'}>
      <Header />
      <main className={'app__body'}>
        <Preview />
        <Controllers />
      </main>
      <Footer />

      <NativeAudio />
      <NativeFileUpload />
    </div>
  )
}

export default App
