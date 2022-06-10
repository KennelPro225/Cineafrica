import './assets/App.css';
import './assets/Landingpage.css';
import Landingpage from './LandingPage';
import Mylogo from './logo';
import Mybutton from './button';
import Form from './entry';

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
        WELCOME TO THE FIRST COMMUNITY WHO WORKS FOR HAVING VERY GOOD RESULT IN FEW TIME
      </div>
      </div>

      <div className='dark-background'>
      </div>
    </div>
  );
}

export default firstPage;