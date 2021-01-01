import React from 'react'

function Song({ currentSong, isPlaying }) {
    return (
        <div className="song">
            <img className={`song__image ${isPlaying ? 'rotate-image' : ""}`} src={currentSong.cover} alt={currentSong.name}></img>
            <h2 className="song__name">{currentSong.name}</h2>
            <h3 className="song__artist">{currentSong.artist}</h3>
        </div>)
}

export default Song