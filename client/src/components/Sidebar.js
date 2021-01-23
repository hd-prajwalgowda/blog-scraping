import React from "react";
import { useLocation } from "react-router-dom";

import ProfileCard from "./ProfileCard";
import PromotionCard from "./PromotionCard";
import TrendingTags from "./TrendingTags";

const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div class="w-1/4 ml-1 mr-1 h-screen overflow-visible">
      <div class="py-2">
        {location.pathname === "/" ? <PromotionCard /> : <ProfileCard />}
        <TrendingTags />
      </div>
    </div>
  );
};

export default Sidebar;
