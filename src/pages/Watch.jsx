import { useParams } from "react-router-dom"
import { listVideo,chaine } from "../data";
// import VideoCard from "../components/video/VideoCard";
import VideoCardHorizontale from "../components/video/VideoCardHorizontale";



function Wacth() {
    const {id} = useParams();
    const video = listVideo.find((v) => v.id === Number(id));
    
    if (!video) {
        return <p>Video indisponible</p>;
    }

    const chaineConcerne= chaine.find((c) => c.id === video.channelID);
    const videosuggerer = listVideo.filter((suggerer) => suggerer.id !== video.id);
    

    return(
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_500px] py-4 px-5">
            <div className="">
                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full rounded-lg aspect-video object-cover"
                />
                <h1 className="text-xl font-bold mt-4 line-clamp-2">{video.title}</h1>
                <div className="flex items-center  gap-3 pt-2">
                    <img
                        src={chaineConcerne.logochaine}
                        alt={video.channel}
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="">
                        <span className="font-semibold">{chaineConcerne.nom}</span>
                        <p className="text-sm text-gray-500 ">
                            {chaineConcerne.abonnes}
                        </p>

                    </div>
                    {/* les boutton 
                    <div className="flex gap-2 text-sm font-bold">
                        <button className="bg-[#f2f2f2] py-[0.6rem] text-sm  px-3 rounded-4xl">Rejoindre</button>
                        <button className="bg-black text-sm text-gray-300 rounded-4xl py-[0.6rem] px-3">S'abonner</button>
                    </div>*/}
                    {/* segong bouton 
                    <div>
                        <div className="flex items-center bg-[#f2f2f2] rounded-4xl px-2 py-1">
                            <button className="flex items-center hover:bg-red-500 py-1 px-4">
                                <i class="pr-5 border-r border-gray-500 text-2xl fa-regular fa-thumbs-up">
                                <span className="text-xs">J'aime</span>

                                </i>
                            </button>
                            <button className="py-1 px-2 ">
                                <i class="text-2xl fa-solid fa-thumbs-down"></i>
                            </button>
                        </div>
                    </div>*/}
                </div>

            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1" >
                {videosuggerer.map((s) =>(
                    <VideoCardHorizontale
                        key={s.id}
                        video={s}
                    />
                ))}
            </div>

        </div>  
    );
    
}
export default Wacth;