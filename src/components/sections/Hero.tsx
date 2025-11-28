import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black-100/50 z-0" />

      {/* Centered Content */}
      <div
        className={`absolute inset-0 top-[80px] sm:top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-col items-center justify-start z-10 pointer-events-none`}
      >
        <div className="text-center">
          <h1 className={`${styles.heroHeadText} text-white font-black`}>
            Hi, I'm <span className="text-[#00d4ff] glitch" data-text={config.hero.name}>{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 font-terminal text-sm sm:text-lg`}>
            &gt; {config.hero.p[0]} <br className="hidden sm:block" />
            &gt; {config.hero.p[1]}
          </p>
        </div>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
