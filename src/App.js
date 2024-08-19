import '@/App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicRoute from '@/pages/Public/PublicRoute';
import AdminRouter from '@/pages/Admin/AdminRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/*' element = {<PublicRoute/>}/>
        <Route path='/admin/*' element = {<AdminRouter/>}/>
      </Routes>
      </BrowserRouter>  
    </div>
  );
}
export default App;
