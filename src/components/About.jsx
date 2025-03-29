import aboutImg from "../assets/FernandoRiggi.jpeg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
    const { t } = useTranslation();

    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-10 text-center text-4xl'>
                <span className='text-[#d4d4d4]'>Fernando Riggi, </span>
                <span className="text-[#d4d4d4]">{t("BACKEND_DEVELOPER")}</span>

            </h1>

            <h2 className="text-center text-3xl lg:text-4xl text-[#d4d4d4] mt-0">{t("about_me")}</h2> {/* Usando t("ABOUT_ME") para tradução */}
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="Fernando Riggi" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{t("about_text")}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
