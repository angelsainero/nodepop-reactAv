import { useState } from 'react';
import './App.css';
import LoginPage from './components/Auth/LoginPage';
import './components/adverts/AdvertsPage'
import AdvertsPage from './components/adverts/AdvertsPage';



function App({isInitillyLogged}) {
  //definimos aqui el estado en vez de en loginpage porque necesitamos también usarlo aqui y no podemos pasarlo de abajo a arriba
  const [isLogged, setIsLogged] = useState(isInitillyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  }
  
  const handleLogout = () => {
    setIsLogged(false);
  }

  return (
    <div className="paper">
      {isLogged ? <AdvertsPage onLogout={handleLogout}/> : <LoginPage onLogin={handleLogin}/>}
      
    </div>
  );
}

export default App;
