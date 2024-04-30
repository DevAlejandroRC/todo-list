import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import AddTask from './components/AddTask';
import ListTodo from './components/ListTodo';

function App() {

  return (
    <div className="App">
      <h4>Todo List with React-Redux</h4>
      <AddTask/>
      <ListTodo/>
    </div>
  );
}

export default App;
