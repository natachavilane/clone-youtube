import { useSearchParams } from "react-router-dom";
import { listVideo, chaine } from "../data";
import VideoCard from "../components/video/VideoCard";

function Search() {

    const [searchParams] = useSearchParams();
    const q = (searchParams.get("q") || "").trim();
   
    const videoConcerne = listVideo.filter(
        (v) => 
        v.title.toLowerCase().includes(q.toLowerCase()) || 
        v.channel.toLowerCase().includes(q.toLowerCase()) ||
        v.category.toLowerCase().includes(q.toLowerCase())
    );
  
    if (videoConcerne.length === 0) {
        return(
            <p className="h-full flex justify-center items-center p-8 text-gray-500">
                Aucun resultat trouve pour {q}
            </p>
        );
    }
    return(
        <div className="pt-10">  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {videoConcerne.map((v) => (
                    <VideoCard
                        key={v.id}
                        video={v}
                    />
            
                ))}

            </div>    
        </div>
    );
}

export default Search;