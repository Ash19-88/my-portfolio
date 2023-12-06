import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsWhatsapp } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const SocialLinks = () => {
  const { t } = useTranslation("socialLinks");
  const links = [
    {
      id: 1,
      child: (
        <>
          {t("whatsappLink")} <BsWhatsapp size={30} />
        </>
      ),
      href: "https://wa.link/mdejk5",
      style: "rounded-tr-md ",
    },
    {
      id: 2,
      child: (
        <>
          {t("linkedinLink")} <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ayelen-llampa1988",
    },
    {
      id: 3,
      child: (
        <>
          {t("githubLink")} <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Ash19-88",
    },
    {
      id: 4,
      child: (
        <>
          {t("mailLink")} <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto: ayelenllampa88@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          {t("resumeLink")} <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Ayelen-Llampa-resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed font-Raleway">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
