import 'assets/styles/App.css';
import DisplayScreen from 'layouts/Screen/Screen';
import Menubar from 'layouts/menubar/Menubar';

const App = () => {
  return (
    <main className='flex flex-col h-[100vh] main'>
      <Menubar />
      <DisplayScreen />
    </main>
    // <div className='main cursor-pointer'></div>
  )
}

export default App