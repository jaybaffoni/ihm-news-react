import './App.css';
import CompanyLogo from './components/common/company-logo';
import Avatar from './components/common/avatar';
import Feed from './components/feed/feed';
import SignIn from './components/common/sign-in';
import HeaderBar from './components/common/header-bar';
import { config } from './components/config';
import Tag from './components/common/tag';
import TagList from './components/common/tag-list';

function App() {
  return (
    <div style={{maxWidth: 500}}>
     {/* <HeaderBar/>
     <SignIn/> */}
     <Feed/>
    </div>
  );
}

export default App;
