import { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";

import depoimentoVedacit from "@/assets/depoimento-vedacit.mp4";
import depoimentoThera from "@/assets/depoimento-thera.mp4";
import depoimentoFoggetti from "@/assets/depoimento-foggetti.mp4";
import depoimentoBmc from "@/assets/depoimento-bmc.mp4";

const FeedbacksSection = () => {
  const videos = [
    { src: depoimentoVedacit, alt: "Depoimento Vedacit" },
    { src: depoimentoThera, alt: "Depoimento Thera" },
    { src: depoimentoFoggetti, alt: "Depoimento Foggetti" },
    { src: depoimentoBmc, alt: "Depoimento BMC" },
  ];

  return (
    <section id="depoimentos" className="">
      <div className="container-custom">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text text-transparent">
            O que{" "}
            <span className="text-transparent bg-gradient-to-r from-[#A3A8C6] via-[#FFFFFF] to-[#75798D] bg-clip-text text-transparent">
              nossos clientes
            </span>{" "}
            dizem
          </h2>
        </div> */}

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente isolado para cada vídeo
const VideoCard = ({ video }: { video: { src: string; alt: string } }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Faz o vídeo carregar o primeiro frame imediatamente
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group">
      {/* Vídeo visível já com o primeiro frame */}
      <video
        ref={videoRef}
        preload="metadata"
        controls={isPlaying}
        className="w-full h-full rounded-2xl object-cover bg-black"
      >
        <source src={video.src} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      {/* Ícone de play sobre o vídeo (sempre visível até dar play) */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300"
        >
          <Play className="w-16 h-16 text-white opacity-90" />
        </button>
      )}
    </div>
  );
};

export default FeedbacksSection;
