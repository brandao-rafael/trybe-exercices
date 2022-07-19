const tasks = ['acordar', 'tomar cafe', 'estudar', 'fazer almoço', 'almoçar']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const element = tasks.map((oneTask) => {
    return Task(oneTask);
  })
  return (
    <div>
      <ul>
        { element } 
      </ul>
    </div>
  );
}

export default App;
