import {useLocation}  from 'react-router-dom';
import DetailComponent  from '../Components/Details/DetailComponent';


export default function Detail(){
    let location = useLocation()
    let name = location.state.nameTopic;
    
    return(
       <div>
            {name
                ? <DetailComponent name={name}/>
                : <p>Error...</p>
            }
       </div>
    )
}