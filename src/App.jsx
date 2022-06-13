import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div>
      <Counter initialValue = {0} step = {1} />
    </div>
  )
}

export default App;
