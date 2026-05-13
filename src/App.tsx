import { Route, Routes, BrowserRouter as Router } from "react-router";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() { 
    
    return (
        <Router basename="/movieapp-reboot">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="movie/:id" element={<Detail />} />
                <Route path="hello" element={<h1>Hello!</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
