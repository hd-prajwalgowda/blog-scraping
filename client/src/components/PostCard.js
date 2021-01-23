import React from "react";
import Tag from "./Tag";
import ActionButton from "./ActionButton";
import { BsBookmarkPlus } from "react-icons/bs";
import { RiHeart2Line } from "react-icons/ri";
import { GoComment } from "react-icons/go";

const PostCard = ({ data, type }) => {
  if (type === "card") {
    return (
      <div class="px-0">
        <div class="block md:flex md:-mx-2">
          <div class="w-80 md:mx-2 mb-4 md:mb-0">
            <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden relative px-2 py-2">
              <div
                className="bg-cover bg-no-repeat bg-center w-full h-48 rounded"
                style={{
                  backgroundImage: `url(${data.social_image})`,
                }}
              ></div>
              <div className="flex justify-between items-start px-2 pt-3">
                <a className="flex items-start" href="/">
                  <img
                    className="w-8 h-8 object-cover rounded-full "
                    src={data.user.profile_image}
                    alt="avatar"
                  />
                  <div className="mx-2">
                    <span class="font-semibold text-sm text-gray-700 dark:text-gray-100">
                      {data.user.name}
                    </span>
                    <span class="text-xs text-gray-600 dark:text-gray-100 block">
                      {data.readable_publish_date}
                    </span>
                  </div>
                </a>
              </div>
              <div class="px-2 py-1 h-auto md:h-24 lg:h-36">
                <p className="text-md text-gray-700 dark:text-gray-100 font-bold hover:text-gray-600">
                  <a href={`/posts/${data.slug}`}>{data.title}</a>
                </p>
                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                  <div className="py-1 flex flex-wrap content-evenly">
                    {data.tag_list.map((tag) => {
                      return <Tag tag={tag} />;
                    })}
                  </div>
                  <div className="grid grid-cols-3 divide-x">
                    {/* <div className="flex justify-center">
                      <ActionButton
                        icon={<RiHeart2Line size="1.25em" />}
                        text="Upvote"
                        buttonHoverStyle="hover:text-red-400 dark:hover:text-red-400"
                      />
                    </div>
                    <div className="flex justify-center">
                      <ActionButton
                        icon={<BsBookmarkPlus size="1.25em" />}
                        text="Save"
                        buttonHoverStyle="hover:text-blue-400 dark:hover:text-blue-400"
                      />
                    </div>
                    <div className="flex justify-center">
                      <ActionButton
                        icon={<GoComment size="1.25em" />}
                        text="Comment"
                        buttonHoverStyle="hover:text-blue-400 dark:hover:text-blue-400"
                      />
                    </div> */}
                    <div className="flex justify-between">
                      <ActionButton
                        icon={<RiHeart2Line size="1.25em" />}
                        text="Upvote"
                        buttonHoverStyle="hover:text-red-400 dark:hover:text-red-400"
                      />
                      <ActionButton
                        icon={<BsBookmarkPlus size="1.25em" />}
                        text="Save"
                        buttonHoverStyle="hover:text-blue-400 dark:hover:text-blue-400"
                      />
                      <ActionButton
                        icon={<GoComment size="1.25em" />}
                        text="Comment"
                        buttonHoverStyle="hover:text-blue-400 dark:hover:text-blue-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    // return (
    //   <div className="px-2 py-2 w-80 bg-white dark:bg-gray-800 max-w-xs rounded-md dark:bg-grad-800 ">
    //     <div
    //       className="bg-cover bg-no-repeat bg-center w-full h-48 rounded"
    //       style={{
    //         backgroundImage: `url(${data.social_image})`,
    //       }}
    //     ></div>
    //     <div className="px-2 my-2">
    //       <p className="text-md text-justify text-gray-700 dark:text-gray-100 font-bold hover:text-gray-600">
    //         <a href="/">{data.title}</a>
    //       </p>
    //       <div className="py-2 flex flex-wrap content-evenly">
    //         {data.tag_list.map((tag) => {
    //           return <Tag tag={tag} />;
    //         })}
    //       </div>
    //       <div className="flex justify-between items-start mb-2">
    //         <a className="flex items-start" href="/">
    //           <img
    //             className="w-8 h-8 object-cover rounded-full "
    //             src={data.user.profile_image}
    //             alt="avatar"
    //           />
    //           <div className="mx-2">
    //             <span class="font-semibold text-sm text-gray-700 dark:text-gray-100">
    //               {data.user.name}
    //             </span>
    //             <span class="text-xs text-gray-600 dark:text-gray-100 block">
    //               {data.readable_publish_date}
    //             </span>
    //           </div>
    //         </a>
    //       </div>
    //       <div className="grid grid-cols-2 divide-x">
    //         <div className="flex justify-center">
    //           <ActionButton
    //             icon={<RiHeart2Line size="1.25em" />}
    //             text="Upvote"
    //             buttonHoverStyle="hover:text-red-400 dark:hover:text-red-400"
    //           />
    //         </div>
    //         <div className="flex justify-center">
    //           <ActionButton
    //             icon={<BsBookmarkPlus size="1.25em" />}
    //             text="Save"
    //             buttonHoverStyle="hover:text-blue-400 dark:hover:text-blue-400"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  } else if (type === "full") {
    return (
      <article class="rounded-md p-4 bg-white dark:bg-gray-800 dark:text-gray-100">
        <div class="">
          <div>
            <div className="flex justify-between mb-2">
              <a className="flex items-start" href="/">
                <img
                  className="w-8 h-8 object-cover rounded-full "
                  src={data.user.profile_image}
                  alt="avatar"
                />
                <div className="mx-2">
                  <span class="font-semibold text-sm text-gray-700 dark:text-gray-100">
                    {data.user.name}
                  </span>
                  <span class="text-xs text-gray-600 dark:text-gray-100 block">
                    {data.readable_publish_date}
                  </span>
                </div>
              </a>
              <div className="sm:flex md:flex">
                <ActionButton
                  icon={<RiHeart2Line size="1.25em" />}
                  text="Upvote"
                  buttonHoverStyle="hover:text-blue-400 dark:hover:text-blue-400"
                />
                <ActionButton
                  icon={<BsBookmarkPlus size="1.25em" />}
                  text="Save"
                  buttonHoverStyle="hover:text-blue-400 dark:hover:text-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="pl-0 md:pl-10 xs:pl-10">
          <h2 class="text-lg sm:text-xl md:text-2xl font-bold mb-2 hover:text-blue-600 leading-7">
            <a
              href="/hagnerd/setting-up-tailwind-with-create-react-app-4jd"
              id="article-link-151230"
            >
              {data.title}
            </a>
          </h2>
          <div class="mb-2 flex flex-wrap">
            {data.tag_list.map((tag) => {
              return <Tag tag={tag} />;
            })}
          </div>
          <div class="flex justify-end items-center">
            <div class="flex"></div>
          </div>
        </div>
      </article>
    );
  } else if (type === "diff") {
    return (
      <div class="px-4">
        <div class="block md:flex md:-mx-2">
          <div class="w-full md:mx-2 mb-4 md:mb-0">
            <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden relative">
              <img
                class="h-56 w-full object-cover object-center"
                src={data.cover_image || data.social_image}
                alt=""
              />
              <div className="px-4 mt-4">
                <div className="flex justify-between">
                  <a className="flex items-start" href="/">
                    <img
                      className="w-8 h-8 object-cover rounded-full "
                      src={data.user.profile_image}
                      alt="avatar"
                    />
                    <div className="mx-2">
                      <span class="font-semibold text-sm text-gray-700 dark:text-gray-100">
                        {data.user.name}
                      </span>
                      <span class="text-xs text-gray-600 dark:text-gray-100 block">
                        {data.readable_publish_date}
                      </span>
                    </div>
                  </a>
                  <div className="sm:flex md:flex">
                    <ActionButton
                      icon={<RiHeart2Line size="1.25em" />}
                      text="Upvote"
                      buttonHoverStyle="hover:text-blue-400 dark:hover:text-blue-400"
                    />
                    <ActionButton
                      icon={<BsBookmarkPlus size="1.25em" />}
                      text="Save"
                      buttonHoverStyle="hover:text-blue-400 dark:hover:text-blue-400"
                    />
                  </div>
                </div>
              </div>
              <div class="p-4 h-auto md:h-40 lg:h-48">
                <a
                  href="/"
                  class="block text-gray-900 dark:text-gray-100 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
                >
                  {data.title}
                </a>
                <div class="text-gray-700 dark:text-gray-200 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  {data.description}
                </div>
                <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                  {data.tag_list.map((tag) => {
                    return <Tag tag={tag} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PostCard;
