import './App.css';
import ChatRoom from './Components/ChatRoom';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from './Components/Home';
import CreateUser from './Components/CreateUser';


function App() {
  return (
    <div className="App">
      {/* <ChatRoom/> */}
      <BrowserRouter>
       
          <Routes>
            <Route path="*" element={<Home />} />
            
            {/* {userLogged ? (
              <Route path={"/dashboard"} element={<ChatRoom />} />
            ) : (
              <Route path={"/home"} element={<ChatRoom />} />
            )} */}

             
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
