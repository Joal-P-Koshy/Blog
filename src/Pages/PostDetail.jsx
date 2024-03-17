import React from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../Images/thumbnail.jpg'

const PostDetail = () => {
  return (
    <>
    <section className="post-detail">
      <div className="container post-detail-container">
        <div className="post-detail-header">
          <PostAuthor/>
          <div className="post-detail-buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail-thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam esse ipsum facere quia eum, voluptatum cupiditate. Cumque dolorum, sit officiis sint, pariatur perspiciatis illo exercitationem eius facilis magnam culpa impedit deserunt quidem inventore enim cum dolore assumenda optio dolores nesciunt neque earum aliquam voluptates. Tenetur?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi esse, nisi sit neque architecto sunt modi corrupti maiores mollitia deleniti! Soluta, voluptatibus eum ab totam officiis debitis ipsam numquam voluptate nisi quasi quo pariatur magnam iusto culpa omnis et facilis, inventore dolores in veniam aut accusantium doloribus! Quod ducimus, soluta voluptatem ratione tempora sapiente.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus ipsam nesciunt cupiditate dolorum necessitatibus quas odio non alias culpa, in molestias quos optio reiciendis. Est quibusdam eaque libero eum fuga ratione voluptate illum ipsam explicabo! Laudantium qui voluptates, exercitationem at eos sed dolor, maxime nostrum illo fugit accusantium cupiditate odio sint maiores! Recusandae quisquam vitae quis deserunt aut officia distinctio necessitatibus esse. Nam pariatur itaque recusandae dolores earum cupiditate adipisci necessitatibus ut commodi vitae iure, magnam inventore, hic laudantium quam odio ea. Omnis veritatis exercitationem non totam suscipit esse porro aliquam. Cupiditate recusandae dolorum vel blanditiis aspernatur, laudantium perspiciatis rem! Repellat deleniti ipsa iure ratione omnis qui tempora aliquam quis animi ad enim repellendus reiciendis minima amet consectetur facere necessitatibus, nesciunt ab est molestias magnam explicabo odio cumque. Laboriosam velit iure impedit dolores tempore recusandae animi dignissimos temporibus perspiciatis dolor, nulla qui ducimus maiores commodi optio natus voluptatem mollitia sint alias nihil unde provident perferendis eos. Magnam iure, modi enim, adipisci fugiat itaque dicta earum illo ipsa dolores impedit. Illum quisquam doloremque dolorem accusamus in delectus odio ratione nihil deserunt similique beatae earum amet ipsa inventore exercitationem reiciendis, voluptatibus dignissimos eum quas nam perspiciatis corporis non tenetur. Voluptas, illum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum natus exercitationem ipsum neque fugiat officiis, mollitia ipsa ullam quam voluptates amet necessitatibus aliquam doloremque dolores voluptate veniam quasi reprehenderit cupiditate similique corrupti a quia corporis nostrum! Aliquam non nulla repudiandae doloribus velit pariatur, quia dignissimos repellat facilis corporis tempore natus porro nobis sit quam adipisci consectetur ad ullam. Impedit eligendi cum eum sint iusto molestias voluptas aspernatur sed praesentium hic dolore sunt vitae eos nemo at et distinctio, sit, facere tempore debitis quam voluptates. Sunt cum culpa reprehenderit saepe dicta reiciendis. Dignissimos, animi! Eveniet adipisci nisi aspernatur molestias possimus.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, iure rerum! Id dicta delectus earum ipsa quam reprehenderit maxime asperiores?</p>
      </div>
    </section>
    </>
  )
}

export default PostDetail