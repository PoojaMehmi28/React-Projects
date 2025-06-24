import Player from "./components/Player";
import './App.css';
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title= "Easy" targetTime={1}/>
        <TimerChallenge title= "Not Easy" targetTime={5}/>
        <TimerChallenge title= "Gettng tough" targetTime={10}/>
        <TimerChallenge title= "Props Only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
