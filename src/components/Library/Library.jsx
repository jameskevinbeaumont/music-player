import React from 'react';
import LibrarySong from '../LibrarySong/LibrarySong';

function Library({ audioRef, songs, setCurrentSong, isPlaying, setSongs, libraryStatus }) {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2 className="library__title">Library</h2>
            <div className="library__songs">
                {songs.map((song) => (
                    <LibrarySong
                        key={song.id}
                        song={song}
                        setCurrentSong={setCurrentSong}
                        songs={songs}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library