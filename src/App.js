import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Slider from "./components/slider/slider";
import MainContent from './components/bodycontent/main_content';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">

      <div className='Total_website_part'>
      <div> <Header/></div>
     
      <div style={{marginTop:"50px"}}> <Slider/></div>
     <div style={{marginTop:"30px"}}>
      <MainContent/>
     </div>
     <div>
      <Footer/>
     </div>
     
      </div>

   
      
    </div>
  );
}

export default App;
