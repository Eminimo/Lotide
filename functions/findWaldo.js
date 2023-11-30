const library = {
  tracks: {
    t01: { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
    t02: { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003" },
    t03: { id: "t03", name: "Four Thirty-Three", artist: "John Cage", album: "Woodstock 1952" }
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
  }
};

const printPlaylists = function () {
  for (const playlistId in library.playlists) {
    const playlist = library.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }
};

const printTracks = function () {
  for (const trackId in library.tracks) {
    const track = library.tracks[trackId];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

const printPlaylist = function (playlistId) {
  const playlist = library.playlists[playlistId];
  if (playlist) {
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    for (const trackId of playlist.tracks) {
      const track = library.tracks[trackId];
      console.log(`  ${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  } else {
    console.log('Playlist not found.');
  }
};

const addTrackToPlaylist = function (trackId, playlistId) {
  const playlist = library.playlists[playlistId];
  if (playlist) {
    playlist.tracks.push(trackId);
    console.log(`Track added to ${playlist.name}`);
  } else {
    console.log('Playlist not found.');
  }
};

const addTrack = function (name, artist, album) {
  const trackId = `t${Object.keys(library.tracks).length + 1}`;
  library.tracks[trackId] = { id: trackId, name, artist, album };
  console.log('Track added:', library.tracks[trackId]);
};

const addPlaylist = function (name) {
  const playlistId = `p${Object.keys(library.playlists).length + 1}`;
  library.playlists[playlistId] = { id: playlistId, name, tracks: [] };
  console.log('Playlist added:', library.playlists[playlistId]);
};

// Additional functions and test cases if needed

// Test your functions
printPlaylists();
printTracks();
printPlaylist('p01');
addTrackToPlaylist('t03', 'p01');
addTrack('New Track', 'New Artist', 'New Album');
addPlaylist('New Playlist');
