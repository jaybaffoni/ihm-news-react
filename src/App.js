import './App.css';
import CompanyLogo from './components/common/company-logo';
import Avatar from './components/common/avatar';
import Feed from './components/feed/feed';
import SignIn from './components/common/sign-in';
import HeaderBar from './components/common/header-bar';

function App() {
  return (
    <div>
     <HeaderBar/>
     <SignIn/>
    </div>
  );
}

export default App;
