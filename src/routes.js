import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import Links from './pages/Links'

function RoutesApp(){
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/links' element={<Links/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </HashRouter>
    )
}
export default RoutesApp;