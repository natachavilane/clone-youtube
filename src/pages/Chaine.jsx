import { useParams } from "react-router-dom";
import { listVideo } from "../data";
import VideoCard from "../components/video/VideoCard";


function Chaine() {
    const {id} = useParams();
    // On recupere la video dont l'id  est egale id le url
    const infoChaine =  listVideo.find((chaine) => chaine.id === Number(id));

    if (!infoChaine) {
        return <p>chaine introuvable</p>;
    }
    
    // garde les vidéos dont channel est égal au channel de la chaîne affichée
    const videochaine = listVideo.filter((v) => v.channel === infoChaine.channel);
    console.log("La valeur de infochaine est :" , infoChaine);

    console.log("video de la chaine :", videochaine);

    return(
        <div>
            <div className="p-4 flex items-center gap-4">
                <img
                    src={infoChaine.logochaine}
                    alt={infoChaine.channel}
                    className="w-20 h-20 rounded-full"
                />
                <h1 className="text-xl font-bold">{infoChaine.channel}</h1>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
                {videochaine.map((v) =>(
                    <VideoCard
                    key={v.id}
                    video={v}
                    
                    />

                ))}
            </div>
        </div>
 
    );
    
}
export default Chaine;