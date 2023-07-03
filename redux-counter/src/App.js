import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';


function App() {
  const authenticated = useSelector(authentication => authentication.authReducer.isAuth)

  return (
    <>
      <Header />
      {!authenticated && <Auth />}
      {authenticated && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;