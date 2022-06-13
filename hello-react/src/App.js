// import logo from './logo.svg';
import './App.css';
import logo from './images/ironhack-logo-xs.png';
import imageone from './images/icon1.png';
import imagetwo from './images/icon2.png';
import imagethree from './images/icon3.png';
import imagefour from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="ironhack-logo"/>
      <img src={imageone} alt="icon1"/>
      <img src={imagetwo} alt="icon2"/>
      <img src={imagethree} alt="icon3"/>
      <img src={imagefour} alt="icon4"/>
    </div>
  );
}

export default App;
