import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import { Button } from "../components";
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "../config/motion";
import state from "../store";

const Home = () => {
  const snapshot = useSnapshot(state);
  const handleClick = () => state.intro = false;

  return (
    <AnimatePresence>
      {snapshot.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header className="flex gap-2 items-center" {...slideAnimation("down")}>
            <a href="https://threejs.org/" target="_blank" rel="noopener noreferrer">
              <img
                src="./threejs.png"
                alt="ThreeJS logo, a triangle with multiple triangles inside representing a wireframe of the big triangle"
                className="w-8 h-8 object-contain"
              />
            </a>
            <small className="text-gray-400">powered by <a href="https://threejs.org/" target="_blank" rel="noopener noreferrer" className="font-bold">ThreeJS</a></small>
          </motion.header>
          <motion.main className="home-content" {...headContainerAnimation}>
            <motion.header {...headTextAnimation}>
              <h1 className="head-text xl:w-[550px] w-[600px]">LET'S <br className="xl:block hidden" /> DO IT.</h1>
            </motion.header>
            <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
              <p className="text-balance font-normal text-gray-400 text-base">Customize your unique and exclusive products with my brand-new 3D customization tool. <strong>Unleash your imagination</strong> and define your own style</p>
              <Button type="filled" title="Start Customizing" handleClick={handleClick} customStyles="w-fit px-4 py-2.5 font-bold text-sm rounded-md tracking-wide" />
            </motion.div>
          </motion.main>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;