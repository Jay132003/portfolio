"use client";

import { useState } from "react";
import SpotifyPlaylist from "./spotify-playlist";
import { Marquee } from "./ui/marquee";
import { motion } from "framer-motion";

const PLAYLISTS = [
  {
    id: 1,
    name: "Alive 🕊️",
    link: "https://open.spotify.com/playlist/72PKk905OzSzSog1N8OLmC?si=E_fa5HDOSuOmveG5S9h3Xw",
    cover: "/Alive.jpeg",
  },
  {
    id: 2,
    name: "Mastana 💛",
    link: "https://open.spotify.com/playlist/3GTTRXXSnKGdzmz6DuVlPp?si=9zmnDKIQSwu3FSn_8LeFlw",
    cover: "/Mastana.jpeg",
  },
  {
    id: 3,
    name: "Human",
    link: "https://open.spotify.com/playlist/3fypkHaTRwz5lr7IMAF3q6?si=eJg_pE3gRYCe8kXd1MVxKg",
    cover: "/Human.jpeg",
  },
  {
    id: 4,
    name: "The OG 90's",
    link: "https://open.spotify.com/playlist/10ZkQhj86xjY4RYWBodxy0?si=VU8jFS5HSZexRiFpwQwEug",
    cover: "/TheOg90.jpeg",
  },
  {
    id: 5,
    name: "Gujju Rocks",
    link: "https://open.spotify.com/playlist/6JmjJn7Ex6aZ3TppK4yMf2?si=l6DgYsogQE-mP5aylVI2rg",
    cover: "/GujjuRocks.jpeg",
  },
];

export default function WhatIListen() {
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist);
    setShowPlaylist(true);
  };

  if (showPlaylist && selectedPlaylist) {
    return (
      <SpotifyPlaylist
        playlistLink={selectedPlaylist.link}
        playlistName={selectedPlaylist.name}
        onBack={() => setShowPlaylist(false)}
      />
    );
  }

  return (
    <motion.div
      id="WhatIListen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-[#F7F7F7] dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#2C2C2C] rounded-2xl px-6 sm:px-8 md:px-10 py-8 space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          What I Listen
        </h2>
        <p className="text-muted-foreground">
          Check out my favorite Spotify playlists
        </p>
      </div>

      {/* ✅ FIXED MARQUEE */}
      <div className="relative overflow-hidden rounded-xl">
        <Marquee speed={30}>
          <div className="flex gap-6 px-2">
            {PLAYLISTS.map((playlist) => (
              <div key={playlist.id} className="playlist-card-container">
                {/* This inner container isolates hover to one card */}
                <div
                  onClick={() => handlePlaylistClick(playlist)}
                  className="cursor-pointer flex flex-col p-4 bg-card border border-border rounded-xl hover:shadow-lg transition-transform duration-500 flex-shrink-0 w-48"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                    <img
                      src={playlist.cover || "/placeholder.svg"}
                      alt={playlist.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-all duration-500 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                        ▶
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground hover:text-green-500 transition-colors duration-300 text-base truncate">
                    {playlist.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">Click to open</p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </motion.div>
  );
}