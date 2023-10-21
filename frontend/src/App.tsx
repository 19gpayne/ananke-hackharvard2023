import {Routes, Route, Navigate} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Auth/login";
import Social from "./Social";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="/friends" element={<Social />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}