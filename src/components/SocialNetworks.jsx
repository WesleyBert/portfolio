 import { FaLinkedinIn, FaGithub, FaGoogle } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialnetworks = [
    {id:"linkedin", name: "linkedin", link:"https://www.linkedin.com/in/wesley-berto/", icon: <FaLinkedinIn/>},
    {id:"github", name: "github", link:"https://github.com/WesleyBert?tab=repositories", icon: <FaGithub/> },
    {id:"gmail", name: "gmail",link:"mailto:wesleyberto4@gmail.com", icon: <FaGoogle/>}
];

const SocialNetworks = () => {
    return (
        <section id='social-networks'>
            {socialnetworks.map((networks) =>(
                <>
                <a href={networks.link} className='social-btn' id={networks.name} key={networks.key}>
                    {networks.icon}
                </a>
                </>
            ))}
        </section>
    )
}
export default SocialNetworks;