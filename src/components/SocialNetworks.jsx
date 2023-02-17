 import { FaLinkedinIn, FaGithub, FaGoogle } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialnetworks = [
    {id:"linkedin", name: "linkedin", icon: <FaLinkedinIn/>},
    {id:"github", name: "github", icon: <FaGithub/> },
    {id:"linkedin", name: "google", icon: <FaGoogle/>}
];

const SocialNetworks = () => {
    return (
        <section id='social-networks'>
            {socialnetworks.map((networks) =>(
                <>
                <a href='https://github.com/WesleyBert?tab=repositories' className='social-btn' id={networks.name} key={networks.key}>
                    {networks.icon}
                </a>
                </>
            ))}
        </section>
    )
}
export default SocialNetworks;