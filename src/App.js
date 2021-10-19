import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login/Login';
import NavMenu from './components/Shared/NavMenu/NavMenu';
import Register from './pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import Appointment from './pages/Appointment/Appointment'
import AllDoctors from './pages/AllDoctors/AllDoctors';
import Footer from './components/Shared/Footer/Footer';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavMenu></NavMenu>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/detailService/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/dentists">
              <AllDoctors></AllDoctors>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
