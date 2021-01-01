import React from 'react';

function LibrarySong({ song, setCurrentSong, songs, audioRef, isPlaying, setSongs }) {
    // Event Handlers
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        // Add Active State - If the id selected (song.id) matches
        // the id in the state object array of songs (item.id), set
        // the active state to true, otherwise set the active state 
        // to false (all the rest)
        const newSongs = songs.map((item) => {
            if (song.id === item.id) {
                return { ...item, active: true };
            } else {
                return { ...item, active: false };
            }
        });
        // Update the state object array of songs
        setSongs(newSongs);
        // Check if the song is playing
        if (isPlaying) audioRef.current.play();
    };

    return (
        <div onClick={songSelectHandler}
            className={`library-song ${song.active ? 'selected' : ""}`}>
            <img className="library-song__image" src={song.cover} alt={song.name}></img>
            <div className="library-song__desc">
                <h3 className="library-song__name">{song.name}</h3>
                <h4 className="library-song__artist">{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong