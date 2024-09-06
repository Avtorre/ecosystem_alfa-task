import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import Main from './pages/Main/Main';
import './styles/App.css';
import Header from './components/UI/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
