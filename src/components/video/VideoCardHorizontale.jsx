import { Link } from "react-router-dom";
import { chaine } from "../../data";

function VideoCardHorizontale({ video }) {

    const infoChaine = chaine.find((c) => c.id === video.channelID);
    console.log("la valeur de infochaine est :", infoChaine);

    return (
        <Link to={`/watch/${video.id}`} className="flex gap-3 hover:bg-gray-100 rounded-lg p-1">
            <img
                src={video.thumbnail}
                alt={video.title}
                className="w-40 aspect-video object-cover rounded-lg shrink-0"
            />
            <div className="min-w-0">
                <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{infoChaine.nom}</p>
                <p className="text-xs text-gray-500">
                    {video.views} • {video.publishedAt}
                </p>
            </div>
        </Link>
    );
}

export default VideoCardHorizontale;