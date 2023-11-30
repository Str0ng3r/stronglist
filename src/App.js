import './App.css';
import { Exercises } from './components/exercises/exercises';
import { Header } from './components/header/header';
import { Main } from './components/main/main';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Exercises></Exercises>
    </div>
  );
}

export default App;
