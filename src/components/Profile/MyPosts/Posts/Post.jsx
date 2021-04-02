import c from './Post.module.css';

const Post = (prop) => {
    return (
      <div>
          <div className={c.post}>
            <div className={c.item}>
              <img src="https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg" alt=""/>
              {prop.message}
            </div>
            Likes: {prop.likesCount}
          </div>
      </div>
    )
}


export default Post;