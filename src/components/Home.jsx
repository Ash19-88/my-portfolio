import { useTranslation } from "react-i18next";
import myphoto from "../assets/myphoto.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <div className="bg-black font-Raleway">
      <div
        name="home"
        className="h-screen bg-gradient-to-b from-slate-800 via-slate-800 to-fuchsia-800 flex justify-center items-center"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-center items-center md:h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full py-10 md:mx-16">
            <h2 className="text-4xl sm:text-6xl font-bold text-white ">
              {t("homeTitle")}
            </h2>
            <span className="text-slate-300 py-4 max-w-md font-medium tracking-widest">
              {t("homeSubtitle")}
            </span>
            <div>
              <Link
                to="projects"
                smooth
                duration={500}
                className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 
           font-semibold to-slate-700 cursor-pointer tracking-widest"
              >
                {t("projects")}
                <span className="ml-2 group-hover:rotate-90 duration-300">
                  <BsFillArrowRightCircleFill size={25} />
                </span>
              </Link>
            </div>
          </div>
          <div className="pt-24">
            <img
              src={myphoto}
              alt="my profile"
              className="mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
