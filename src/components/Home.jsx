import myphoto from "../assets/myphoto.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="bg-black font-Raleway">
      <div
        name="home"
        className="h-screen bg-gradient-to-b from-slate-800 via-slate-800 to-fuchsia-800 "
      >
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 lg:px-20 md:flex-row">
          <div className="flex flex-col justify-center h-full ">
            <h2 className="text-4xl sm:text-6xl font-bold text-white ">
              Building beautiful web experiences
            </h2>
            <span className="text-slate-300 py-4 max-w-md font-medium tracking-widest">
              I invite you to know more about me and what I do
            </span>
            <div>
              <Link
                to="projects"
                smooth
                duration={500}
                className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 
           font-semibold to-slate-700 cursor-pointer tracking-widest"
              >
                Projects{" "}
                <span className="ml-2 group-hover:rotate-90 duration-300">
                  <BsFillArrowRightCircleFill size={25} />
                </span>
              </Link>
            </div>
          </div>
          <div>
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
