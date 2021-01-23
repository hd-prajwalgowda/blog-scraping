import React from "react";
import logo1 from "../assets/logo2.png";

const ProfileCard = (params) => {
  return (
    <div class="rounded bg-white mb-4">
      <div class="flex items-center p-3 mb-0">
        <div class="avatar rounded-full overflow-hidden mr-3">
          <img width="56px" height="56px" src={logo1} alt="" />
        </div>
        <div>
          <span class="text-lg font-semibold text-gray-700">Prajwal Gowda</span>
          <span class="text-sm text-gray-600  block">Full Stack Developer</span>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex-row justify-center">
          <p class="text-xl font-semibold text-gray-700">40K</p>
          <p class="text-md font-semibold text-gray-700">Followers</p>
        </div>
        <div className="flex-row justify-center">
          <p class="text-xl font-semibold text-gray-700">84</p>
          <p class="text-md font-semibold text-gray-700">Posts</p>
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

export default ProfileCard;
