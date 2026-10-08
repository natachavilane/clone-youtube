
function VideoCard({ video }) {
    
  return(
   <div className="bg-[#1A1A1A] rounded-lg cursor-pointer hover:bg-green-500 transition text-white border p-2">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full mb-2"
      />
      <div className="flex gap-5">
            <img className="w-8 h-8 rounded-full" src={video.logochaine} alt={video.title} />
        <div>
            <h3 className="font-semibold mb-1 line-clamp-2">{video.title}</h3>
            <p className="text-sm text-gray-300">{video.channel}</p>
            <p className="text-xs text-gray-400">
                {video.views} • {video.publishedAt}
            </p>
        </div>
      </div>
    </div>

  );
  
} 
export default VideoCard;
  

