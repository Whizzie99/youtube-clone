import '../css/RecommendedVideos.css';
import VideoCard from './VideoCard'
import thumbnail1 from '../imgs/thumbnails/aquila_aveionen.png';
import thumbnail2 from '../imgs/thumbnails/click_fast.png';
import thumbnail3 from '../imgs/thumbnails/meal_finder.png';
import thumbnail4 from '../imgs/thumbnails/custom_modal.png';
import avatar from '../imgs/thumbnails/avatar.jpg'


const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage={avatar}
                    channel="John Doe"
                    image={thumbnail1}
                />

                <VideoCard
                    title="How that find what is what"
                    views="4.3M Views"
                    timestamp="4 days ago"
                    channelImage={avatar}
                    channel="Mary Doe"
                    image={thumbnail2}
                />

                <VideoCard
                    title="Oh well....out of Ideas"
                    views="1M Views"
                    timestamp="2 days ago"
                    channelImage={avatar}
                    channel="Mary Doe"
                    image={thumbnail3}
                />

                <VideoCard
                    title="How that find what is what"
                    views="4.3M Views"
                    timestamp="4 days ago"
                    channelImage={avatar}
                    channel="Mary Doe"
                    image={thumbnail4}
                />

                <VideoCard
                    title="Oh well....out of Ideas"
                    views="1M Views"
                    timestamp="2 days ago"
                    channelImage={avatar}
                    channel="Mary Doe"
                    image={thumbnail3}
                />

                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage={avatar}
                    channel="John Doe"
                    image={thumbnail2}
                />

                <VideoCard
                    title="Oh well....out of Ideas"
                    views="1M Views"
                    timestamp="2 days ago"
                    channelImage={avatar}
                    channel="Mary Doe"
                    image={thumbnail4}
                />

                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage={avatar}
                    channel="John Doe"
                    image={thumbnail1}
                />
                
            </div>
        </div>
    );
}
 
export default RecommendedVideos;