import '../styles/components/InformationContainer.sass';


const Information = ({icon, contats, info}) => {
    return (
        <div className="info-card">
        {icon}
            <div >
                <h3>{contats}</h3>
                <p>{info}</p>
            </div>
        </div>
    )
    
}

export default Information;