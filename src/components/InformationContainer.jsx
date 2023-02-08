import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/informationcontainer.sass';
import Information from './Information';


const InformationContainer = () => {
 return(
    <section id="information">
            <Information id='phone' icon={<AiFillPhone/>} contats={'Telefone'} info={'11954766909'}/>
            <Information id='email' icon={<AiOutlineMail/>} contats={'Email'} info={'Wesleyberto4@gmail.com'}/>
            <Information id='pin' icon={<AiFillEnvironment/>} contats={'Estado'} info={'Sao paulo'}/>
    </section>
)}

export default InformationContainer;