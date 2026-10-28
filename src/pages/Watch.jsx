import { useParams } from "react-router-dom"
import { listVideo,chaine } from "../data";
import VideoCard from "../components/video/VideoCard";



function Wacth() {
    const {id} = useParams();
    const video = listVideo.find((v) => v.id === Number(id));
    const chaineconcerne= chaine.find((c) => c.id === video.channelID);
    console.log('chianeconcerne est:',chaineconcerne);

    if (!video) {
        return <p>Video indisponible</p>;
    }
    

    const videosuggerer = listVideo.filter((suggerer) => suggerer.id !== video.id);
    

    return(
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_350px] py-4">
            <div className="">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full rounded-lg aspect-video object-cover"
                />

                <h1 className="text-xl font-bold mt-4">{video.title}</h1>

                

                <div className="flex items-center gap-3 pt-2">
                    <img
                        src={chaineconcerne.logochaine}
                        alt={video.channel}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <span className="font-semibold">{video.channel}</span>
                        <p className="text-sm text-gray-500 mt-1">
                            {chaineconcerne.abonnes}
                        </p>

                    </div>
                </div>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1" >
                {videosuggerer.map((s) =>(
                    <VideoCard
                        key={s.id}
                        video={s}
                        
                    
                    />
                ))}
            </div>

        </div>  
    );
    
}
export default Wacth;