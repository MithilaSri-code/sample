/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Header_top from './component/header_top/header_top';
import Footer from './component/footer/footer';
import Main_image from './component/main_image/main_image';
import Country_list from './component/country_list/country_list';
import Invent_area from './component/invent_area/invent_area';
import Reg_form from './component/reg_form/reg_form';

function App() {
  return (
    <div>

      <Header_top />
      <Invent_area />
      <Main_image/>
      < Country_list />
     < Reg_form />
      <Footer />


</div>
  );
}

export default App;
