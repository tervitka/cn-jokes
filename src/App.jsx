import './css/App.css';
import { api } from './api';
import Body from './components/Body';


function App() {

  api.get('/random').then(response => console.log(response.data.value));

  return (
    <Body />    
  );
}

export default App;
