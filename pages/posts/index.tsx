import axios from 'axios';
import { GetServerSideProps } from 'next';
// import { useEffect, useState } from 'react';

interface Post {
  id: number;
  attributes: {
    Title: string;
    Content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface StrapiResponse {
  data: Post[];
}
interface Props {
  posts: Post[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const endpoint = `${process.env.STRAPI_URL}/posts`;
  const response = await axios.get<StrapiResponse>(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
    },
  });
  const posts = response.data.data;
  return {
    props: {
      posts,
    },
  };
};

export default function PostsPage(props: Props) {
  const { posts } = props;
  // const [posts, setPosts] = useState<Post[]>([]);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts`;
  //     const response = await axios.get<StrapiResponse>(endpoint, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
  //       },
  //     });
  //     setPosts(response.data.data);
  //   };
  //   fetchPosts();
  // }, []);
  return (
    <section>
      <h1>Posts</h1>
      {posts.map(post => (
        <p key={post.id}>{post.attributes.Title}</p>
      ))}
    </section>
  );
}
