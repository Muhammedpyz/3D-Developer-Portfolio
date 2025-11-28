import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { config } from "../../constants/config";
import { styles } from "../../constants/styles"; // Explicitly re-importing just in case

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} font-terminal text-cyan-400`}>&gt; run: introduction.exe</p>
        <h2 className={styles.sectionHeadText}>Genel Bakış.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* GitHub Stats Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-20 flex flex-col gap-10 w-full"
      >
        <h3 className={`${styles.sectionHeadText} text-center`}>GitHub Stats.</h3>

        <div className="flex flex-wrap justify-center gap-5">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Muhammedpyz&show_icons=true&theme=dark&bg_color=001219&title_color=00d4ff&icon_color=00d4ff"
            alt="Muhammedpyz GitHub Stats"
            className="h-[180px]"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Muhammedpyz&layout=compact&theme=dark&bg_color=001219&title_color=00d4ff&icon_color=00d4ff"
            alt="Top Languages"
            className="h-[180px]"
          />
        </div>

        <div className="flex justify-center w-full">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=Muhammedpyz&theme=dark&background=001219&ring=00d4ff&currStreakLabel=00d4ff"
            alt="GitHub Streak"
            className="w-full max-w-2xl"
          />
        </div>

        <div className="flex justify-center w-full">
          <img
            src="https://ghchart.rshah.org/00d4ff/Muhammedpyz"
            alt="Contribution Graph"
            className="w-full max-w-4xl bg-[#001219] p-4 rounded-xl"
          />
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
