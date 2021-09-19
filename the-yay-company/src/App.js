
import './sass/style.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route, NavLink
} from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';

import HomePage from './components/home/HomePage';
import NewsPage from './components/news/NewsPage';
import ContactPage from './components/contact/ContactPage';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
          <div className="wrapper">
            <header>
              <Navbar  expand="md">
                    <Container>
                        <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse  id="basic-navbar-nav">      
                        <Nav
                        className="mr-auto my-3 my-md-0 px-md-3 pl-mx-0"
                        >
                        <NavLink className="my-2 my-md-0 nav-link" href="#action1" exact to="/">Home</NavLink>  
                        <NavLink className="my-2 my-md-0 nav-link" href="#action2" to="/news">News</NavLink>
                        <NavLink className="my-2 my-md-0 nav-link" href="#action3" to="/contact">Contact</NavLink>
                        </Nav>
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2 my-3"
                            aria-label="Search"
                        />
                        <Button className="my-3" variant="outline-success">Go</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container> 
                </Navbar>
              </header>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
              <div className="pageMainContent">
                <Switch>
                  <Route path="/news">
                    <NewsPage />
                  </Route>
                  <Route exact path="/contact">
                    <ContactPage />
                  </Route>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                </Switch>
              </div>
              <Footer />
          </div>
        </Router>
    </>
  );
}

export default App;
