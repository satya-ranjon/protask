import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className=" flex h-screen justify-center items-center gap-5">
      <motion.div
        className="bg-[#FBBD06] h-32 w-32 rounded-full"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-[#4285F5] h-32 w-32 rounded-full"
        animate={{ y: [0, -50, 0] }}
        transition={{
          delay: 0.4,
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="bg-[#EA4436] h-32 w-32 rounded-full"
        animate={{ y: [0, -50, 0] }}
        transition={{
          delay: 0.8,
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="bg-[#34A952] h-32 w-32 rounded-full"
        animate={{ y: [0, -50, 0] }}
        transition={{
          delay: 1.2,
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Loader;
