import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 flex justify-center items-center p-4 bg-tertiary rounded-full border border-white/10 hover:border-cyan-400 transition-all duration-300 group" key={technology.name}>
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
