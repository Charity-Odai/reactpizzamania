import './App.css';
import Navbar from './Component/Navbar';
import Carousel from './Component/Carousel';
import Content from './Component/Content';
import Foot from './Component/Foot';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <Content/>
     <Foot/>
    </div>
  );
}

export default App;
