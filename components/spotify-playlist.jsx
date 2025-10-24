"use client"

export default function SpotifyPlaylist({ playlistLink, playlistName, onBack }) {
  console.log("[v0] SpotifyPlaylist rendering with:", { playlistLink, playlistName })

  const getPlaylistId = (link) => {
    const match = link.match(/playlist\/([a-zA-Z0-9]+)/)
    return match ? match[1] : ""
  }

  const playlistId = getPlaylistId(playlistLink)
  const embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}`

  console.log("[v0] Playlist ID extracted:", playlistId)
  console.log("[v0] Embed URL:", embedUrl)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/40 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <button
          onClick={onBack}
          className="text-white hover:text-green-500 transition font-semibold flex items-center gap-2"
        >
          ← Back
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">{playlistName}</h1>

        <div className="rounded-lg overflow-hidden">
          <iframe
            style={{ borderRadius: "12px" }}
            src={embedUrl}
            width="100%"
            height="632"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        {/* Link to open in Spotify */}
        <div className="mt-8 text-center">
          <a
            href={playlistLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-green-500 text-black rounded-full font-bold hover:bg-green-400 transition"
          >
            Open in Spotify
          </a>
        </div>
      </div>
    </div>
  )
}
