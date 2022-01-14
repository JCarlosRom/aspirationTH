import { useHistory } from "react-router-dom";
export default function Topic ({data}){
    
    const history = useHistory(); 

    function getInfo(name){
        history.push("/detail",{nameTopic:name})
    }

    const {id, name} = data;

    return(
        <div key={id} className="topic" onClick={()=>getInfo(name)} data-testid="Topic">
            <p style={{textAlign:"center"}}>{name}</p>
        </div>
    )
}