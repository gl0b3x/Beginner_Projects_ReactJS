import {useState} from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users/SearchUsers';

function App() {
  const [invites, setInvites] = useState([])
  const [success, setSuccess] = useState(false)


  return (
    <div className="App">
      {
        success ? <Success count={invites.length}/> : <Users invites={invites} setSuccess={setSuccess} setInvites={setInvites}/>
      }
    </div>
  );
}

export default App;
