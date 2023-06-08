import React from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/Mainpage'
import Menu from './Pages/Menu'
import { API_URL } from './config';

function App() {
  const [categories,setCategories] = React.useState([])
    React.useEffect(()=>{
        axios.get(`${API_URL}/categories`).then(response=>{
            setCategories(response.data)
        })
    },[])
  return (
    <div>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/category/:id" element={<Menu categories={categories}/>}/>
    </Routes>
    </div>
  );
}
export default App;
