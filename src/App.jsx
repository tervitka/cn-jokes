import './css/App.css';
import { api } from './api';

function App() {

  api.get('/random').then(response => console.log(response.data.value));

  return (
    <header>
      <h1>Chuck Norriss</h1>
      <h2>jokes generator</h2>
    </header>
   
  );
}

export default App;
