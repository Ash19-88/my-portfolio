import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <div
      name={t("contact")}
      className="w-full h-screen bg-gradient-to-b from-slate-800 to-fuchsia-800  p-4 lg:px-20 text-white font-Raleway"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-1 pt-14 lg:pt-16 2xl:pt-2">
          <p className="text-2xl md:text-4xl font-bold inline  border-b-4 border-slate-400">
            {t("contactTitle")}
          </p>
          <p className="py-6">{t("contactSubtitle")}</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/2285d3d7-f62c-475d-9536-e3d451f03ea3"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder={t("namePlaceholder")}
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              required
              minLength="3"
            />
            <input
              type="email"
              name="email"
              placeholder={t("emailPlaceholder")}
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="10"
              minLength="20"
              maxLength="250"
              placeholder={t("messagePlaceholder")}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
             "
              required
            ></textarea>
            <button className="text-white bg-gradient-to-l from-cyan-400 to-fuchsia-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-125 duration-300">
              {t("contactButton")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
