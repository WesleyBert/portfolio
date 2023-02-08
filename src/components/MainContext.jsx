import "../styles/components/maincontext.sass";
import AboutContainer from "./AboutContainer";
import Projects from "./ProjectsContainer";
import TecnologiesContainer from "./TecnologiesContainer";


const MainContext = () => {
    return(
        <main id='main-content'>
            <AboutContainer/>
            <TecnologiesContainer/>
            <Projects/>
        </main>
    )
}
export default MainContext;