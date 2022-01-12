import './App.css';
import CompanyLogo from './components/common/company-logo';
import {AppButton} from './components/common/app-button';
import Avatar from './components/common/avatar';

function App() {
  return (
    <div>
      <Avatar/>
      <Avatar source="https://picsum.photos/200"/>
    </div>
  );
}

export default App;
