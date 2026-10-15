import VideoCard from "./VideoCard";
import { listVideo } from "../../data";

function Video({ menuactif }) {
    // on effectue le filtrage au clic du bouton musique au autre 
    const videosFiltres =
    menuactif === "Tout" ? listVideo
    :listVideo.filter((videoFiltrer) => videoFiltrer.category === menuactif);

    return (
        <div className="text-white mt-3">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center">
                {videosFiltres.map((video) => {
                    return (
                        <VideoCard key={video.id} video={video}/>
                    );
                })}
           </div>
        </div>
    );
}

export default Video;