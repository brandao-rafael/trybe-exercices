import { useState, useContext } from 'react';
import FormContext from './context/FormContext';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModule] = useState('fundamentos');

  const { addData } = useContext(FormContext);

  const handleChange = ({ target }) => {
    const {value, name} = target;
    switch(name) {
      case 'name': 
        setName(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'module':
        setModule(value);
        break;
      default: 
        throw new Error('invalid');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const personalInfo = {
      name,
      age,
      city,
      module,
    };
    addData(personalInfo);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          name:
          <input name="name" type="text" id="name" value={name} onChange={handleChange}/>
        </label>
        <label htmlFor="age">
          age:
          <input name="age" type="number" id="age" value={age} onChange={handleChange}/>
        </label>
        <label htmlFor="city">
          city:
          <input name="city" type="text" id="city" value={city} onChange={handleChange}/>
        </label>
        <label htmlFor="module">
          module:
          <select name="module" id="module" value={module} onChange={handleChange}>
            <option value="fundamentos">fundamentos</option>
            <option value="front-end">front-end</option>
            <option value="back-end">back-end</option>
            <option value="ciencia da computação">ciencia da computação</option>
          </select>
          <button type="submit">Submit</button>
        </label>
      </form>     
    </div>
  );
}

export default App;
