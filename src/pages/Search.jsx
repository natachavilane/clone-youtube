import { useSearchParams } from "react-router-dom";
import { listVideo } from "../data";
import VideoCard from "../components/video/VideoCard";

function Search() {
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q") || "";
    const videoConcerne = listVideo.filter((v) => v.title.toLowerCase().includes(q.toLowerCase())

    );
    console.log("les videsos sont ", videoConcerne);

    return(
        <div>

            <h1 className="p-4 text-xl">Résultats pour : {q}</h1>
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