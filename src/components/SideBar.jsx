import avatar from '../img/avatar.png'

import "../styles/components/sidebar.sass"
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const SideBar = () => {
    return(
        <aside id="sidebar">
            <img src={avatar} alt="wesley Francisco berto" />
            <p className="title">Desenolvedor Júnior Front-end</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="" className="btn">Download do curriculo</a>

           </aside>
    )
}
export default SideBar;