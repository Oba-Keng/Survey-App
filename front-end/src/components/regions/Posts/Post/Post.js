import React, { useState } from "react";

const Post = ({ post }) => {
  const [arraySum, setSum] = useState(0);

  //  const averageAray = [];
  //  post.age.forEach(

  //  )
  //  .push(<div>
  //    setSum(

  //    )

  //  </div>)

  return (
    <div>
      {post.age}
      <div>{post.surname}</div>
      Average age:
      <div>{post.firstNames}</div>
      Oldest person who participated in survey
      <div>{post.contactNumber}</div>
      Youngest person who participated in survey
      <div>{post.date}</div>
      Percentage of people who like Pizza:
      <div>{post.age}</div>
      Percentage of people who like Pasta: Percentage of people who like Pap and
      Wors: People like to eat out: People like to watch movies: People like to
      watch TV: People like to listen to the radio:
    </div>
  );
};

export default Post;
