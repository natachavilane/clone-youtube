import VideoCard from "./VideoCard";
import { listVideo } from "../../data";

function Video({ menuactif }) {
    // on effectue le filtrage au clic du bouton musique au autre 
    const videosFiltres =
    menuactif === "Tout" ? listVideo
    :listVideo.filter((videoFiltrer) => videoFiltrer.category === menuactif);

    return (
        <div className="text-white py-8">
            <p className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-10">
                {/* Listes des videos */}
            </p>
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