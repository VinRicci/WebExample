import axios from 'axios';
import { GetServerSideProps } from 'next';

interface Props {
  id: string;
  title: string;
}

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
  data: Post;
}

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const { id } = context.query;
  if (typeof id === 'string') {
    const endpoint = `${process.env.STRAPI_URL}/posts/${id}`;
    const response = await axios.get<StrapiResponse>(endpoint, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    });
    console.log(response.data);
    return {
      props: {
        title: response.data.data.attributes.Title,
        id: '2',
      },
    };
  }
  return {
    props: {
      title: 'No hay publicaciones',
      id: '404',
    },
  };
};

export default function PostPage({ id, title }: Props) {
  return (
    <h1>
      {id} - {title}
    </h1>
  );
}
