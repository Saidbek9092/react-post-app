import classes from "./PostItem.module.css";

// Just featB first commit
// another commit

function PostItem({ post }) {
  return (
    <article className={classes.item}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

export default PostItem;
