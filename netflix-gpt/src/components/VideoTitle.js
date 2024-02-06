import React from 'react';

function VideoTitle({title, overview}) {
    return (
        <div className="w-screen aspect-video pt-[23%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
          <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
           <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
            <div className="flex my-4 md:m-0">
                <button
                    className="p-4  bg-white text-black py-1 md:py-4 px-3 md:px-12 rounded text-xl font-bold hover:bg-opacity-80"
                >▶️ Play</button>
                <button
                    className="hidden md:inline-block mx-2 p-4 px-12 bg-gray-600 text-white rounded text-xl font-bold opacity-50 hover:bg-opacity-80"
                >More Info</button>
            </div>
        </div>
    );
}

export default VideoTitle;