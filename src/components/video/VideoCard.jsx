import { chaine } from "../../data";
import { Link } from "react-router-dom";


function VideoCard({ video, className="" }) {
  const infoChaine = chaine.find((c) => c.id === video.channelID); 
  // console.log('La valeur de chaine dans videoCard :', chaine);
    
  return(
<Link
      to={`/watch/${video.id}`}
      className={`block bg-[#1A1A1A] rounded-lg cursor-pointer hover:bg-green-500 transition text-white border p-2 ${className}`}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full mb-2 rounded-lg aspect-video object-cover"
      />
      <div className="flex gap-5">
        <img className="shrink-0 w-8 h-8 rounded-full " src={infoChaine.logochaine} alt={video.channel} />
        <div>
          <h3 className="font-semibold mb-1 line-clamp-2">{video.title}</h3>
          <p className="text-sm text-gray-300">{video.channel}</p>
          <p className="text-xs text-gray-400">
            {video.views} • {video.publishedAt}
          </p>
        </div>
      </div>
    </Link>

  );
  
} 
export default VideoCard;
  

