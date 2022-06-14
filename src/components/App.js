import './assets/App.css';
import './assets/Landingpage.css';
import Landingpage from './LandingPage';
import Mylogo from './logo';
import Mybutton from './button';
import Form from './entry';
import Price from './price';

function firstPage() {
  return (
    <div className='main-div'>
      <div className='background-div'>
      <div className="App">
        <div className='header'>
          <Mylogo/>
          <Mybutton/>
        </div>
        <div className='text'>
        <Landingpage/>
        </div>
        <Form/>
      </div>
      </div>
      <div className='dark-background'>
        <Price/>
      </div>
    </div>
  );
}

export default firstPage;
