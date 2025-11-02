"use client";

import { useState } from "react";
import SpotifyPlaylist from "./spotify-playlist";
import { Marquee } from "./ui/marquee";
import { motion } from "framer-motion";
import { SiSpotify } from "react-icons/si";

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
  const [hoveredId, setHoveredId] = useState(null);

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
    <motion.section
      id="WhatIListen"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        w-full max-w-[950px] mx-auto
        px-2 sm:px-4
        py-6 sm:py-8
        bg-transparent relative
      "
    >
      {/* 🎶 Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, ease: "backOut" }}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1DB954]/10 ring-2 ring-[#1DB954]/30"
          >
            <SiSpotify className="text-[#1DB954] text-xl" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50">
            What I Listen
          </h2>
        </div>
        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base flex items-center justify-center gap-1">
          My playlists that keep the vibe alive 🎧
        </p>
      </div>

      {/* 🎧 Playlist Marquee */}
      <div className="relative overflow-visible">
        <Marquee speed={25}>
          <div className="flex gap-5 sm:gap-8 px-2 sm:px-4">
            {PLAYLISTS.map((playlist) => (
              <motion.div
                key={playlist.id}
                onMouseEnter={() => setHoveredId(playlist.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handlePlaylistClick(playlist)}
                className={`
                  relative flex-shrink-0 w-40 sm:w-48 cursor-pointer rounded-2xl
                  bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md
                  border border-stone-200 dark:border-stone-700
                  transition-all duration-300 ease-out
                  ${
                    hoveredId === playlist.id
                      ? "border-[#1DB954]/60 shadow-[0_0_25px_rgba(29,185,84,0.25)]"
                      : "shadow-[0_3px_10px_rgba(0,0,0,0.06)]"
                  }
                `}
              >
                <div className="p-3 flex flex-col">
                  {/* 🖼️ Playlist Image */}
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                    className={`relative overflow-hidden rounded-xl mb-3 aspect-square transition-all duration-300 ${
                      hoveredId === playlist.id
                        ? "ring-2 ring-[#1DB954]/40"
                        : "ring-0"
                    }`}
                  >
                    <img
                      src={playlist.cover || "/placeholder.svg"}
                      alt={playlist.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredId === playlist.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    {hoveredId === playlist.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.08, 1],
                            opacity: [1, 0.95, 1],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.8,
                            ease: "easeInOut",
                          }}
                          className="w-9 h-9 bg-[#1DB954] rounded-full flex items-center justify-center text-white text-xs shadow-[0_0_15px_rgba(29,185,84,0.5)]"
                        >
                          ▶
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* 📜 Playlist Text */}
                  <h3 className="font-semibold text-stone-900 dark:text-white hover:text-[#1DB954] transition-colors duration-200 text-sm truncate">
                    {playlist.name}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                    Tap to play
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>
    </motion.section>
  );
}