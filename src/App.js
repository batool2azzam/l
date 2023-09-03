import Btn from './Components/btn';
import Headerr from './Components/Headerr';
import Post from './Components/Post';
import './Components/components.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headerr />
        <Btn />
        <Post />
        <Post />
        <Post />
        <Post />

      </header>
    </div>
  );
}

export default App;
