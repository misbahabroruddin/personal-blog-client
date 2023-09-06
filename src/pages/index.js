import { CarouselWithContent } from '@/components/Carousel';
import Layout from '@/components/Layout';

export default function Home({ data }) {
  return (
    <>
      <CarouselWithContent data={data} />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const res = await fetch('http://localhost:5000/api/v1/posts');

  const { data } = await res.json();

  return {
    props: { data },
  };
}
