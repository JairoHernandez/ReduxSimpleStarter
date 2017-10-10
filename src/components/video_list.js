import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        // etag key is being set by youtube for each video.
        // This will avoid error 'Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of `VideoList`'
        return <VideoListItem key={video.etag} video={video} />
    });
    //console.log(`TEST -- ${videoItems}`);

    // react is smart enough to list out as 'li' items from VideoItems array
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
};

export default VideoList;