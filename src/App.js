import './App.css';
import CompanyLogo from './components/common/company-logo';

function App() {
  return (
    <div>
      <h1>Nancy Test</h1>
      <CompanyLogo/>
      <CompanyLogo size='medium' rounded/>
      <CompanyLogo size='small'/>
    </div>
  );
}

export default App;
