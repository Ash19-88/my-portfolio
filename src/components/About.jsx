import Container from "postcss/lib/container";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <section
      name={t("about")}
      className="w-full h-full bg-gradient-to-b from-fuchsia-800 to-slate-800 font-Raleway"
    >
      <div className="max-w-screen-lg w-auto p-4 lg:px-20 mx-auto flex flex-col justify-center h-full">
        <div className="pb-1 ">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4  border-slate-400 text-white">
            {t("about")}
          </p>
        </div>
        <div className="mx-3 mt-6">
          <p className="text-sm md:mt-10 md:text-xl text-white font-semibold ">
            {t("hi")}
          </p>
          <p className="text-sm md:text-xl mt-1 text-white font-semibold py-4">
            {t("techs")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:items-baseline md:text-justify">
            <p className="text-sm md:text-xl mt-1 text-white font-semibold ">
              {t("ux")}
            </p>
            <p className="text-sm md:text-xl mt-1 text-white font-semibold pt-4">
              {t("background")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
