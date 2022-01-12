import './App.css';
import CompanyLogo from './components/common/company-logo';
import {AppButton} from './components/common/app-button';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
      <h1>Nancy Test</h1>
      <CompanyLogo/>
      <CompanyLogo size='medium' rounded/>
      <CompanyLogo size='small'/>
      <AppButton variant="primary" title="Press Me"/>
      <AppButton variant="secondary" title="Press Me"/>
      <AppButton variant="light" title="Press Me"/>
      <AppButton variant="dark" title="Press Me"/>
    </div>
  );
}

export default App;
