import './css/App.css';
import { api } from './api';

function App() {

  api.get('/random').then(response => console.log(response.data.value));

  return (
    <div className="container">
      <div className='row'>
        <div className='col-4'>
          <p>1</p>
        </div>
        <div className='col-4'>
          <p>2</p>
        </div>
        <div className='col-4'>
          <p>3</p>
        </div>
      </div>
    </div>
  );
}

export default App;
