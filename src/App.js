import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './pages/register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Layout from './components/layout/Layout';
import Dashboard from "./pages/dashboard/Dashboard";
import Account from "./pages/account/Account";


function App() {


  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Register />} />

        <Route path='/home' element={
          <Sidebar>
            <Layout>
              <Home />
            </Layout>
          </Sidebar>}
        />

        <Route path="/dashboard" element={
          <Sidebar>
            <Layout>
              <Dashboard />
            </Layout>
          </Sidebar>
        } />


        <Route path="/account" element={
          <Sidebar>
            <Layout>
              <Account />
            </Layout>
          </Sidebar>
        }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
