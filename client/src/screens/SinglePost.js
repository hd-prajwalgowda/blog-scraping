import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";
import ActionButton from "../components/ActionButton";
import { BsBookmarkPlus } from "react-icons/bs";
import { RiHeart2Line } from "react-icons/ri";
import Tag from "../components/Tag";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const SinglePost = () => {
  let { slug } = useParams();
  console.log(slug);
  // const { isLoading, error, data, isFetching } = useQuery(
  //   "repoData",
  //   async () => {
  //     const data = await
  //     console.log(data);
  //     return data;
  //   }
  // );

  // if (isLoading) return "Loading...";

  // if (error) {
  //   console.log(error);
  //   return "An error has occurred: " + error.message;
  // }
  // useEffect(() => {
  //   axios.get(`http://localhost:8080/testauth/${slug}`).then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter style={nord} language={language} children={value} />
      );
    },
  };

  const markdown =
    '# *Hello there*,\n I\'m Divya Xavier, a passionate frontend web developer who loves to share his tech ideas, knowledge and expertise with the community.\n\nI  was looking for a revolutionary idea to build up and the resources that I used. Finally, I created my project for [#christmashackathon](https://hashnode.com/n/christmashackathon) @[Hashnode](@hashnode) and I would love to share it with you guys.\n\n# The Idea\n\nToday, I\'m here with a revolutionary project that is an ** App that could create custom QR codes for free in seconds **. This project has a good future because companies are charging a lot of money from the user to create his QR code and takes a lot of time with a great mess. So, I find the solution to solve this matter. Here is the working demo of what we are going to build 👇\n\n![qrcode.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1609226523976/f7LcW1X1u.gif)\n\n# For whom \n\n1. The people who can\'t afford to pay money to create a QR Code\n2. People who need AD-Free sources\n3. People who need very fast\n4. People who care about UI and UX\n\n# Tech Stack\n1. HTML\n2. CSS\n3. Javascript\n4. Jquery\n\nIsn\'t it cool? Let\'s jump on to the coding right now.\n\n# Coding\n\nFirst of all, let\'s have a look at the file tree 👇 It consists of common Frontend components like `index.html`, `style.css` and `index.js`\n\n```mermaid\nroot/\n├── index.html\n├── style.css\n└── index.js\n```\n\nFor this project, we are gonna use a very nice, powerful, easy to use Javascript library called `qrcode.js` built by [@davidshimjs](https://github.com/davidshimjs)\n\n![scrnli_29_12_2020_16-10-17.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1609238523304/Hntc3EP22.png)\n\nClick  [here](http://davidshimjs.github.io/qrcodejs/)  to view the documentation 👈\n\nBy using this Cloudflare CDN, we could easily add the javascript library to our project 👇\n```html\n<script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>\n```\n\nWe also need `jquery` to make this library work, So another `<script>` is for `jquery`. Let\'s add `jquery` by using the Cloudflare CDN 👇\n\n```html\n<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>\n```\n\nAt the very bottom, we have added the script for the `index.js` 👇\n```html\n<script src="index.js"></script>\n```\n\nSo, here goes the complete code for `index.html` 👇\n\n```html\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Generate Awesome QR Codes in Seconds.</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n    <h1>Generate Awesome QR Codes in Seconds. 🔥</h1>\n\n    <input id="text" type="text" value="https://hashnode.com/" />\n    <div class="output">\n        <div id="qrcode"></div>\n        <h3>Here is the generated QR Code 👈</h3>\n    </div>\n\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>\n    <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>\n    <script src="index.js"></script>\n</body>\n</html>\n```\nAs you can see here we have `<div>` with id `qrcode`. It works as a canvas where our QR Code gets inserted.\n\nAlso, He should link our CSS to the project by 👇\n\n```html\n<link rel="stylesheet" href="style.css">\n```\n\nOk, then. Let\'s go start coding our `style.css`. This is just the place where we go write our CSS styles that work with the UI and UX. So, I have created a clean, good looking code for that. I used the `font-family: "Poppins", sans-serif;` as my font-family.\n\nFor that, I used Google fonts, Import it by 👇\n\n```css\n@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");\n```\n\nSo, here goes the completed code for `style.css` The UI here is so simple but it totally depends on you so go make some changes and make it yours. \n\n```css\n@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: "Poppins", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  background: linear-gradient(to right, #8e2de2, #4a00e0);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\nh1 {\n  font-size: 2em;\n}\ninput {\n  height: 50px;\n  margin: 10px 0;\n  width: 50%;\n  background: #fff;\n  color: #000;\n  padding: 0 10px;\n  border: none;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  border-radius: 5px;\n}\n.output {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.25);\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n  border-radius: 10px;\n  height: 260px;\n}\n#qrcode {\n  width: 150px;\n  height: 150px;\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  margin: -110px 120px 0 0;\n}\n``` \n\nOk you have created the UI for the app, so let\'s jump onto the last step that is to create the functionality of creating custom QR codes with the help of `qrcode.js`\n\nFor that, follow the steps given below 👇\n\n**1. ** Setting our `qrcode` component. Here, I have used 2 properties that are `colorDark` and `colorLight`. More properties are available at the [documentation](http://davidshimjs.github.io/qrcodejs/)\n\n```javascript\nvar qrcode = new QRCode("qrcode", {\n  colorDark: "#000",\n  colorLight: "#fff",\n});\n```\n\n**2.** Initialise a function called `makeCode()` This does the main work of our app. It alerts the user if he hasn\'t wrote anything in the input and also starts the process of creating the code. For creating the code, it uses this line of code `qrcode.makeCode(Text.value)` It works like `qrcode.makeCode(https://hashnode.com/)` The value of the input field comes inside the `Text.value` block. 👇\n\n```js\nconst makeCode = () => {\n  var Text = document.getElementById("text");\n\n  if (!Text.value) {\n    alert("Input a text");\n    Text.focus();\n    return;\n  }\n\n  qrcode.makeCode(Text.value);\n};\n\nmakeCode();\n```\n**3.** Now, we have reached the final requirement that is to trigger the function `makeCode()` on  `enter` press. We are gonna use jquery for creating this.  For this to happen, just add the following code 👇\n\n```jsx\n$("#text")\n  .on("blur", function () {\n    makeCode();\n  })\n  .on("keydown", function (e) {\n    if (e.keyCode == 13) {\n      makeCode();\n    }\n  });\n```\n![](https://gif-finder.com/wp-content/uploads/2014/11/Minionshappyyay.gif)\n\nThat\'s It, we have just developed our app and it is now time to test it \n🚀🦄\n\nGo check the [live demo](https://create-qrcode.netlify.app/)\n\n%[https://codepen.io/divyaxavier/pen/WNGdyvb]\n\nNow, we should check if the QR code given is correct or not for this, I am gonna give the URL as `https://hashnode.com/` and I will scan this to check if this is correct.\n\nYeah, This is perfect. We did it. This is working perfectly \n\n![Webp.net-resizeimage.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1609246008209/UgJEyjQ8_.jpeg)\n\n# Wrapping Up\n\nHope you enjoyed this article. Go add some nice reactions and cool comments below. Share it with your friends let them know about this article. Thank you for your time.\n\n%[https://twitter.com/DivyaXavier1/status/1343924484420427777]\n\n![](https://media1.tenor.com/images/af0a6dca1f08be9ad62cdb44db696c1b/tenor.gif?itemid=191550980)\n\n## Wishing you a good 2021 🥳🎉';

  // const markdown = "";
  return (
    <div className="w-full md:container md:mx-auto mt-6">
      <div className="flex justify-center ">
        <div class="min-h-screen w-full md:w-9/12 ">
          <img
            class="h-96 w-full object-cover object-center rounded-lg"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--9qGbWA5a--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/zbk57qsyozful740czt6.jpeg"
            alt=""
          />
          <div className="bg-white dark:bg-gray-800 rounded my-2 pt-10">
            <div className="pb-2 px-6 sm:px-2 md:px-10 lg:px-36 flex justify-between mb-2">
              <a className="flex items-start" href="/">
                <img
                  className="w-8 h-8 object-cover rounded-full "
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--So7RHAjU--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/344735/70749f3f-334b-4414-a6e2-ca8dd8a89f3a.jpeg"
                  alt="avatar"
                />
                <div className="mx-2">
                  <span class="font-semibold text-sm text-gray-700 dark:text-gray-100">
                    Prajwal Gowda
                  </span>
                  <span class="text-xs text-gray-600 dark:text-gray-100 block">
                    3rd Aug
                  </span>
                </div>
              </a>
              <div className="sm:flex md:flex">
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
              </div>
            </div>
            <div className="pb-4 px-6 sm:px-2 md:px-10 lg:px-36">
              <div>
                <Tag tag="Hello" />
                <Tag tag="Hello" />
                <Tag tag="Hello" />
              </div>
            </div>
            <div className="pb-10 px-6 sm:px-2 md:px-10 lg:px-36 text-4xl dark:text-gray-100 font-semibold">
              Arrow functions in JavaScript: Everything you need to know about
              them
            </div>
            <div class="px-6 pb-10 sm:px-2 md:px-10 lg:px-36 prose dark:prose-dark max-w-none">
              <ReactMarkdown
                plugins={[gfm]}
                children={markdown}
                renderers={renderers}
              ></ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="container mx-auto">
  //     <ReactMarkdown
  //       className="dark:text-white"
  //       plugins={[gfm]}
  //       children={markdown}
  //       renderers={renderers}
  //     ></ReactMarkdown>
  //   </div>
  // );
};

export default SinglePost;
