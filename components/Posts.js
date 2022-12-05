import React from "react";
import Card from "./Card";

const Posts = () => {
  const posts = [
    {
      id: 100,
      username: "zeeshnarain",
      userImg: "/profile.png",
      img: "/profile2.jpg",
      caption: "This is amazing instagram clone",
    },
    {
      id: 101,
      username: "zeeshnarain",
      userImg: "/profile.png",
      img: "/profile.png",
      caption: "This is amazing instagram clone",
    },
    {
      id: 102,
      username: "zeeshnarain",
      userImg: "/profile.png",
      img: "/profile.png",
      caption: "This is amazing instagram clone",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Card
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
