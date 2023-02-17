import { DiGithub } from 'react-icons/di';
import avatar from '../img/avatar.png'

import "../styles/components/sidebar.sass"
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const SideBar = () => {
    return(
        <aside id="sidebar">
            <img src={avatar} alt="wesley Francisco berto" />
            <p className="title">Desenvolvedor Júnior Front-end</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="https://drive.google.com/file/d/1sJ6PRvzY6t-lgmkQvWcJ9bO6h5hX1cl9/view"  download className="btn">Download do curriculo</a>
           </aside>
    )
}
export default SideBar;