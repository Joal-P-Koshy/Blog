import React, { useState } from 'react'
import Thumbnail from '../Images/thumbnail.jpg'
import PostItem from './PostItem';


const DummyPost = [
    {
        id: '1',
        thumbnail: Thumbnail,
        category: 'art',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, natus.',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse deserunt recusandae omnis odio repellat ex expedita facilis illo! Fugit neque veritatis maiores facere inventore ab blanditiis quae sint beatae, eos cupiditate, rem distinctio magni, voluptate repudiandae voluptas. Exercitationem saepe quas consequuntur, libero dolores sed eveniet architecto doloremque mollitia, ex praesentium dolor id distinctio? Voluptas, et sunt, nesciunt dolor aspernatur eum incidunt, maxime porro aut voluptate atque explicabo nulla voluptatem excepturi distinctio illum modi magni ullam aliquam fugit ad. Similique nobis, repellendus assumenda consequuntur corrupti obcaecati nulla adipisci iure tenetur aliquid fuga atque voluptatem nihil eius quod ipsa eos soluta.",
        authorId: 3
    },
    {
        id: '2',
        thumbnail: Thumbnail,
        category: 'education',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, natus.',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse deserunt recusandae omnis odio repellat ex expedita facilis illo! Fugit neque veritatis maiores facere inventore ab blanditiis quae sint beatae, eos cupiditate, rem distinctio magni, voluptate repudiandae voluptas. Exercitationem saepe quas consequuntur, libero dolores sed eveniet architecto doloremque mollitia, ex praesentium dolor id distinctio? Voluptas, et sunt, nesciunt dolor aspernatur eum incidunt, maxime porro aut voluptate atque explicabo nulla voluptatem excepturi distinctio illum modi magni ullam aliquam fugit ad. Similique nobis, repellendus assumenda consequuntur corrupti obcaecati nulla adipisci iure tenetur aliquid fuga atque voluptatem nihil eius quod ipsa eos soluta.",
        authorId: 1
    },
    {
        id: '3',
        thumbnail: Thumbnail,
        category: 'business',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, natus.',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse deserunt recusandae omnis odio repellat ex expedita facilis illo! Fugit neque veritatis maiores facere inventore ab blanditiis quae sint beatae, eos cupiditate, rem distinctio magni, voluptate repudiandae voluptas. Exercitationem saepe quas consequuntur, libero dolores sed eveniet architecto doloremque mollitia, ex praesentium dolor id distinctio? Voluptas, et sunt, nesciunt dolor aspernatur eum incidunt, maxime porro aut voluptate atque explicabo nulla voluptatem excepturi distinctio illum modi magni ullam aliquam fugit ad. Similique nobis, repellendus assumenda consequuntur corrupti obcaecati nulla adipisci iure tenetur aliquid fuga atque voluptatem nihil eius quod ipsa eos soluta.",
        authorId: 2
    },
    {
        id: '4',
        thumbnail: Thumbnail,
        category: 'agriculture',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, natus.',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse deserunt recusandae omnis odio repellat ex expedita facilis illo! Fugit neque veritatis maiores facere inventore ab blanditiis quae sint beatae, eos cupiditate, rem distinctio magni, voluptate repudiandae voluptas. Exercitationem saepe quas consequuntur, libero dolores sed eveniet architecto doloremque mollitia, ex praesentium dolor id distinctio? Voluptas, et sunt, nesciunt dolor aspernatur eum incidunt, maxime porro aut voluptate atque explicabo nulla voluptatem excepturi distinctio illum modi magni ullam aliquam fugit ad. Similique nobis, repellendus assumenda consequuntur corrupti obcaecati nulla adipisci iure tenetur aliquid fuga atque voluptatem nihil eius quod ipsa eos soluta.",
        authorId: 5
    },
    {
        id: '5',
        thumbnail: Thumbnail,
        category: 'entertainment',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, natus.',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse deserunt recusandae omnis odio repellat ex expedita facilis illo! Fugit neque veritatis maiores facere inventore ab blanditiis quae sint beatae, eos cupiditate, rem distinctio magni, voluptate repudiandae voluptas. Exercitationem saepe quas consequuntur, libero dolores sed eveniet architecto doloremque mollitia, ex praesentium dolor id distinctio? Voluptas, et sunt, nesciunt dolor aspernatur eum incidunt, maxime porro aut voluptate atque explicabo nulla voluptatem excepturi distinctio illum modi magni ullam aliquam fugit ad. Similique nobis, repellendus assumenda consequuntur corrupti obcaecati nulla adipisci iure tenetur aliquid fuga atque voluptatem nihil eius quod ipsa eos soluta.",
        authorId: 4
    },
]

const Posts = () => {
    const [posts, setposts] = useState(DummyPost);

    return (
        <>
        <section className="posts">
            
               <div className="container posts-container">
                {
                     posts.map(({id, thumbnail, category, title, description, authorId})=> 
                     <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title} description={description} authorId={authorId}/>)
                }
               </div>
            
        </section>
        </>
    )
}

export default Posts