import logo from './logo.svg';
import './App.css';
import Textbox from './components/asst/textbox';
import StudentComponent from './components/quizes/student';

function App() {
  return (
    <div className="App">
      <Textbox/>
      <StudentComponent/>
    </div>
  );
}

export default App;
