import classes from './NewPost.module.css';



function NewPost({ changeBodyHandler, cancel }) {

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={cancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;