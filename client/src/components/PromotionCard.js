import React from "react";
import logo1 from "../assets/logo2.png";

const PromotionCard = (params) => {
  return (
    <div class="rounded bg-white mb-4">
      <div class="flex p-3 mb-0">
        <div class="rounded-full overflow-hidden mr-3">
          <img width="56px" height="56px" src={logo1} alt="" />
        </div>
      </div>
      <div className="flex px-3 justify-around">
        <div className="flex-row justify-center">
          <p class="text-xl font-semibold text-gray-700">
            Blog is a community of amazing developers
          </p>
          <p class="text-sm font-semibold text-gray-600">
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </p>
        </div>
      </div>

      <div className="flex px-10 py-2 justify-evenly">
        <button class="bg-blue-500 text-sm text-white font-semibold rounded px-4 py-1">
          Follow
        </button>
        <button class="bg-blue-500 text-sm text-white font-semibold rounded px-4 py-1 ">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default PromotionCard;
