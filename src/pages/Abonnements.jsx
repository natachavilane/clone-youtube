import { listVideo } from "../data";
import VideoCard from "../components/video/VideoCard";

function Abonnements (){
    return(
       <div className="">
            <h1 className="text-xl font-bold mb-4">Abonnements</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {listVideo.map((video) => (
                    <VideoCard
                        key={video.id}
                        video={video}
                    
                    />
                    
                ))}
            </div>
        </div>

    );
}
export default Abonnements;