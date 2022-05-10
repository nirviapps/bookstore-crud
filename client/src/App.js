import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/pages/Home';
import AddBook from './components/pages/AddBook';
import Dashboard from './components/pages/Dashboard';
import GetBooks from './components/pages/GetBooks';
import UpdateBook from './components/pages/UpdateBook';
import {Provider} from 'react-redux';
import { store} from './redux/store';


function App() {




  return (
    <>
    <Provider store={store}>
        <Router>

         <Nav />
         <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/getbooks" element={<GetBooks />}/>
            <Route exact path="/admin" element={<Dashboard />}/>
            <Route exact path="/addbook" element={<AddBook />}/>
            <Route exact path="/books/:id" element={<UpdateBook />}/>
            
           

            

         </Routes>


        </Router>
        </Provider>
    
    
    </>
  );
}

export default App;

