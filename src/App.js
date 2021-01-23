import logo from './logo.svg';
import './App.css';
import GameView from './gameView';
import CharacterCreator from './modules/characterCreator';

var characterHasBeenCreated = true;

function App() {
  
  if (characterHasBeenCreated) {
  return (
    <GameView />
  );
  }
  else
  return (
    <CharacterCreator />
  )
}

export default App;
