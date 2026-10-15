import { useParams } from "react-router-dom"

function Wacth() {
    const {id} = useParams();
    console.log("L'id est :" ,{id})
    return(
        <div>
            <h1>Video numero{id}</h1>
        </div>
    );
    
}
export default Wacth;