import axios from 'axios';
import { useEffect, useState } from 'react';

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

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get<Post[]>(
        'https://localhost:1337/api/posts',
        {
          headers: {
            Authorization:
              'Bearer 1856481f2382c326b94d45b56e3664eb15ee55752a5ad05b2340fb9903c25e105984bbd73cc1fb723a6e731ecbc3678fb82cdfe0eef40b65d7170ddaf0ca3fc9632f8e69ac7df921af1b186e1a1ecc6bbb1dd17c16c4ab165f13810da31e575b063e9b375d8d22fb02fcf1996b53e1c8130fd2d8f3d377c39d7381c2ce3d3200',
          },
        }
      );
      setPosts(response.data);
      console.log(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <section>
      <h1>Posts</h1>
      {posts.map(post => (
        <p key={post.id}>{post.attributes.Title}</p>
      ))}
    </section>
  );
}
