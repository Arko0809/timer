import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Ezz Peasy" targetTime={1} />
        <TimerChallenge title="Oh is it getting tough honey?" targetTime={5} />
        <TimerChallenge title="C'mon don't die now" targetTime={10} />
        <TimerChallenge title="Welcome to the black hole" targetTime={15} />
      </div>
    </>
  );
}

export default App;