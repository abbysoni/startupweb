import './App.css';
import Header from "./Pages/Homepage/Header";
import Tophome from "./Pages/Homepage/Tophome";
import Midhome from "./Pages/Homepage/Midhome";
import Footer from "./Pages/Homepage/Footer";
// import orderDetail from './Pages/Tejas/orderDetail';
// import invDetail from './Pages/Tejas/invDetail';
// import jobCard from './Pages/Tejas/jobCard';
// import invoice from './Pages/Tejas/invoice';

function App() {
  return (
    <div className="App">
    <Header/>
    <Tophome/>
    <Midhome/>
    <Footer/>

    {/* <orderDetail/> */}
    {/* <invDetail/>
    <jobCard/>
    <invoice/> */}


    </div>
  );
}
export default App;