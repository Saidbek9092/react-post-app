import classes from "./PostItem.module.css";

// Just featB first commit this is branch A
// another commit news asd asd

function PostItem({ post }) {
  return (
    <article className={classes.item}>
      <h1>{post.title} branchB</h1>
      <p>{post.body}</p>
    </article>
  );
}

export default PostItem;
