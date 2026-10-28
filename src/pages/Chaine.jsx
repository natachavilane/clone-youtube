import { useParams } from "react-router-dom";
import { listVideo, chaine } from "../data";
import VideoCard from "../components/video/VideoCard";


function Chaine() {
    const {id} = useParams();
    // On recupere la video dont l'id  est egale id le url
    const chaines =  chaine.find((c) => c.id === Number(id));
    console.log("chaine est :", chaines);

    if (!chaines) {
        return <p>chaine introuvable</p>;
    }

    // garde les vidéos dont channel est égal au channel de la chaîne affichée
    const videochaine = listVideo.filter((v) => v.channelID === chaines.id);
    console.log('videochaine est :', videochaine);

    return(
        <div className=" -red-500 px-10">
            <div className="p-4 flex gap-4 ">
                {/*shrink-0 empeche l'image de retraisir  */}
                <div className="shrink-0">
                    <img
                        src={chaines.logochaine}
                        alt={chaines.channel}
                        className="w-20 h-20 rounded-full "
                    />
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold">{chaines.nom}</h1>
                    <p className="text-sm text-gray-400 py-1">@{chaines.nom} {chaines.abonnes} . {videochaine.length} videos </p>
                    <p className="text-sm text-gray-400 max-w-sm md:max-w-xl line-clamp-1">{chaines.description}</p>
                </div>
            </div>

            <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 pt-5 lg:grid-cols-3 ">
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