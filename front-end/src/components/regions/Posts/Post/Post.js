import React, { useState } from "react";

const Post = ({ post }) => {
  const [arraySum, setSum] = useState(0);

  // const averageAray = [];
  // post.age.forEach().push(<div>setSum( )</div>);
  // console.log(age);

  return (
    <div>
      Average age:
      <div>{post.age}</div>
      Oldest person who participated in survey
      {<div>{Math.max.apply(Math, [post.age])} </div>}
      Youngest person who participated in survey
      {<div>{Math.min.apply(Math, post.age)} </div>}
      Percentage of people who like Pizza:
      <div>{post.food}</div>
      Percentage of people who like Pasta:<br></br>
      Percentage of people who like Pap and Wors: <br></br>
      People like to eat out: People like to watch movies:<br></br>
      People like to watch TV: <br></br>
      People like to listen to the radio:
    </div>
  );
};

export default Post;
