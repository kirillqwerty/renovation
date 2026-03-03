import { motion } from "motion/react";
import { getImageURL } from "../../utils/image-url";
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F1ED] to-[#E8E4DF] pt-20 overflow-hidden">
      {/* Background image */}
      <img
        src={getImageURL("header-photo.png")}
        className="absolute inset-0 w-full h-full object-cover opacity-100"
        alt=""
      />

      {/* Overlay (optional for better readability) */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >

          <motion.h1
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl mb-8 text-white eading-tight"
          >
            Поможем Вам заработать на ремонте
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}
