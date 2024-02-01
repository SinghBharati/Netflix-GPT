import React from 'react';

function VideoTitle({title, overview}) {
    return (
        <div className="w-screen aspect-video pt-[23%] px-24 absolute text-white bg-gradient-to-r from-black">
          <h1 className="text-6xl font-bold">{title}</h1>
           <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="flex">
                <button
                    className="p-4 px-12 bg-white text-black rounded text-xl font-bold hover:bg-opacity-80"
                >▶️ Play</button>
                <button
                    className="mx-2 p-4 px-12 bg-gray-600 text-white rounded text-xl font-bold opacity-50 hover:bg-opacity-80"
                >More Info</button>
            </div>
        </div>
    );
}

export default VideoTitle;