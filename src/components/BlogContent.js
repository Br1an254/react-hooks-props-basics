import React from "react";

function BlogContent(props) {
  console.log(props)

  if(!props.isPublished){
    return null
  } else{
    return (
      <div>
        <p>{props.articleText}</p>
        <p>Minutes to read : {props.minutesToRead} munite</p>
      </div>
    )
  }
}

export default BlogContent;
