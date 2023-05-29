import {BrowserRouter} from "react-router-dom";

import {
    About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas
} from './component'

/**
 * 根节点
 * @returns {JSX.Element} 返回 UI 节点
 * @constructor 初始化
 */
const App = () => {

    return (<BrowserRouter>
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover
               bg-no-repeat bg-center">
                <Navbar/>
                <Hero/>
            </div>
            <About/>
            <Experience/>
            <Tech/>
            <Works/>
            <Feedbacks/>
            <div className="relative z-0">
                <Contact/>
                <StarsCanvas/>
            </div>
        </div>
    </BrowserRouter>)
}

export default App
