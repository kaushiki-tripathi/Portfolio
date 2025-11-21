import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Import icons

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    // UPDATED: Added responsive positioning (bottom-4 for mobile, bottom-8 for desktop)
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-4">
      {/* Audio Element */}
      <audio ref={audioRef} src="/bg-music.mp4" loop />

      {/* Text Label (Hidden when playing, or keep strictly to match image) */}
      {!playing && (
        <span className="text-gray-300 text-sm italic font-light hidden md:block animate-fade-in">
          Wanna play music while viewing?
        </span>
      )}

      {/* Button */}
      <button
        onClick={toggleMusic}
        // UPDATED: Added 'cursor-pointer' and responsive sizing (w-12 for mobile, w-14 for desktop)
        className={`cursor-pointer w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          playing
            ? "bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.6)]" // Active styling
            : "bg-green-400/20 hover:bg-green-400/40 backdrop-blur-md shadow-lg border border-green-400/30" // Inactive styling
        }`}
      >
        {/* React Icons Logic */}
        {playing ? (
          <FaPause className="w-6 h-6 text-white transition-transform duration-300 scale-100" />
        ) : (
          <FaPlay className="w-6 h-6 text-white transition-transform duration-300 scale-110 ml-1" />
        )}
      </button>
    </div>
  );
}