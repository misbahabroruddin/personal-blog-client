import { CarouselWithContent } from '@/components/Carousel';
import PostView from '@/containers/PostView';

export default function Home({ data }) {
  return (
    <section className='mt-20 py-8 md:32 md:py-12 lg:36 lg:py-16 xl:36 xl:py-16'>
      <PostView data={data} />
    </section>
  );
}

export async function getServerSideProps(ctx) {
  const res = await fetch('http://localhost:5000/api/v1/posts');

  const data = await res.json();

  return {
    props: { data },
  };
}
