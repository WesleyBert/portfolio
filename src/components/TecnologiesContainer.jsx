import{
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact
} from 'react-icons/di'

import '../styles/components/tecnologiescontainer.sass'

const technologies = [
    {id: "html", name: "HTML5", icon: <DiHtml5/>},
    {id: "css", name: "CSS3", icon: <DiCss3/>},
    {id: "js", name: "JavaScript", icon: <DiJsBadge/>},
    {id: "node", name: "Node.js", icon: <DiNodejsSmall/>},
    {id: "mysql", name: "MYSQL", icon: <DiMysql/>},
    {id: "reacr", name: "React", icon: <DiReact/>},


 ]
const TecnologiesContainer = () => {
    return(
        section
    )
}
export default TecnologiesContainer;