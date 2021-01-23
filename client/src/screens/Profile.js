import React, { useEffect } from "react";
import PostCard from "../components/PostCard";
import { useAuth } from "../provider/AuthProvider";

function Profile() {
  const auth = useAuth();
  console.log(auth.user);
  return (
    <div className="dark:text-white">
      <div className="mx-2 md:mx-10">{auth.user._id}</div>
      <div className="mx-2 md:mx-10">{auth.user.name}</div>
      <div className="mx-2 md:mx-10">{auth.user.email}</div>
      <div className="mx-2 md:mx-10">Saved Posts:</div>
      <div className="flex justify-center">
        <div class="min-h-screen flex flex-wrap justify-center">
          <div className="m-2 sm:m-6 md:m-8">
            <PostCard />
          </div>
          <div className="m-2 sm:m-6 md:m-8">
            <PostCard />
          </div>
          <div className="m-2 sm:m-6 md:m-8">
            <PostCard />
          </div>
          <div className="m-2 sm:m-6 md:m-8">
            <PostCard />
          </div>
          <div className="m-2 sm:m-6 md:m-8">
            <PostCard />
          </div>
          <div className="m-2 sm:m-6 md:m-8">
            <PostCard />
          </div>
          <div className="m-2 sm:m-6 md:m-8">
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
