 import { FaLinkedinIn, FaGithub, FaGoogle } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialnetworks = [
    { name: "linkedin", icon: <FaLinkedinIn/>},
    { name: "github", icon: <FaGithub/> },
    { name: "google", icon: <FaGoogle/>}
];

const SocialNetworks = ( ) => {
    return (
        <section id='social-networks'>
            {socialnetworks.map((networks) =>(
                <a href='#' className='social-btn' id={networks.name} key={networks.name}>
                    {networks.icon}
                </a>
            ))}
        </section>
    )
}
export default SocialNetworks;