import React, { useState } from "react";
import { motion } from "framer-motion";
import PostCard from "../components/PostCard";
import TrendingTags from "../components/TrendingTags";
import articles from "../assets/articles.json";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
function HomeScreen() {
  const arr = Array.from(Array(24).keys());
  const data = articles.slice(0, 50);
  const [cardType, setCardType] = useState("card");
  let cardLayout;
  const variants = {
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  switch (cardType) {
    case "card":
      cardLayout = data.map((each) => {
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="m-2 sm:m-6 md:m-8">
              <PostCard data={each} type={"card"} />
            </div>
          </motion.div>
        );
      });
      break;
    case "full":
      cardLayout = data.map((each) => {
        return (
          <div className="w-full my-1 px-2 md:px-20 sm:px-12 sm:m-2 md:m-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <PostCard data={each} type={"full"} />
            </motion.div>
          </div>
        );
      });
      break;
    case "diff":
      cardLayout = data.map((each) => {
        return (
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 m-2 sm:m-2 md:m-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              whileHover={{ scale: 1.1 }}
              variants={variants}
            >
              <PostCard data={each} type={"diff"} />
            </motion.div>
          </div>
        );
      });
      break;
    default:
      cardLayout = data.map((each) => {
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="m-2 sm:m-6 md:m-8">
              <PostCard data={each} type={"card"} />
            </div>
          </motion.div>
        );
      });
      break;
  }

  return (
    <div className="container mx-auto">
      {/* <div className="flex justify-end text-white">
        <button>
          <BsGrid3X2GapFill size="1.25em" />
        </button>
        <button>
          <FaThList size="1.25em" />
        </button>
      </div> */}
      <div className="flex flex-wrap justify-end mt-4 ">
        <select
          name="Layout"
          className="p-2 bg-white dark:bg-gray-800 dark:text-gray-100 rounded-md"
          onChange={(e) => {
            console.log(e.target.value);
            setCardType(e.target.value);
          }}
        >
          <option value="card">Small Card</option>
          <option value="diff">Larg Card</option>
          <option value="full">Card List</option>
        </select>
      </div>
      {/* <div className="h-28 sm:h-16 flex flex-wrap justify-center content-around mt-4 space-x-4">
        <div className="text-gray-800 dark:text-gray-100">Trending Tags: </div>
        {arr.map((each) => (
          <TrendingTags tag="sdjkfh" size="sm" />
        ))}
      </div> */}
      <div className="flex justify-center">
        <div class="min-h-screen w-screen flex flex-wrap justify-center">
          {cardLayout}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
