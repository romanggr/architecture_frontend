import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import {BurgerProvider} from "./context/BurgerContext.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Project1 from "./pages/Project1.jsx";


const App = () => {
    return (
        <BurgerProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout/>}>
                        <Route index element={<Navigate replace to="home"/>}/>
                        <Route path='home' element={<Home/>}/>
                        <Route path='contacts' element={<Contact/>}/>
                        <Route path='about' element={<About/>}/>
                        <Route path='project1' element={<Project1/>}/>

                        <Route path='*' element={<div>Page not found</div>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </BurgerProvider>
    );
};

export default App;