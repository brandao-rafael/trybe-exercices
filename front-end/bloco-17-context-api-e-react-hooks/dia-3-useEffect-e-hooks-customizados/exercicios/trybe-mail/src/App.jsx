import { useEffect, useState } from 'react';
import './App.css';
import Mails from './components/Mails';
import Timer from './components/Timer';

const emailsToSend = [
  {
    id: 1,
    title: "Primeiro email",
    status: 0,
  },
  {
    id: 2,
    title: "Segundo email",
    status: 0,
  },
  {
    id: 3,
    title: "Terceiro email",
    status: 0,
  },
];

function App() {
  const [emails, setEmails] = useState([]);
  useEffect(() => { // componentDidMount
    setEmails(emailsToSend);
  }, []);

  return (
    <div className="App">
      <header><h1>TrybeMail</h1></header>
      <Mails emails={ emails } setEmails={setEmails} />
      <Timer />
    </div>
  );
}

export default App;
