import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import jsonFetcher from 'utils/jsonFetcher';
import BaseLayout from 'components/BaseLayout';
import { getAllPosts } from 'utils/api';

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts
    },
    revalidate: 3600
  };
};

export default function Blog({ allPosts: { edges } }) {

  const { data } = useSWR('/api/posts', jsonFetcher, { initialData: edges });

  return (
    <div>
      <Head>
        <title>Blog articles page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <BaseLayout>
          <h1>Latest blog articles</h1>
          <hr />
          <section>
            {data.map(({ node }) => (
              <div key={node.id}>
                <div className="padding">
                  <h2>{node.title}</h2>
                  <Link href={`/blog/${node.slug}`}>
                    <a>Read more</a>
                  </Link>
                </div>
              </div>
            ))}
          </section>


          <section>
            <div class="skew skew-top mr-for-radius">
              <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
                <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
              </svg>
            </div>
            <div class="skew skew-top ml-for-radius">
              <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
                <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
              </svg>
            </div>
            <div class="py-20 bg-gray-50 radius-for-skewed">
              <div class="container mx-auto px-4">
                <div class="mb-16 flex flex-wrap items-center">
                  <div class="w-full lg:w-1/2 text-center lg:text-left">
                    <span class="text-green-600 font-bold">Dolor sit amet consectutar</span>
                    <h2 class="text-4xl lg:text-5xl font-bold font-heading">Our Blog</h2>
                  </div>
                  <div class="hidden lg:block text-right w-1/2"><a class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">View More Articles</a></div>
                </div>
              </div></div>
            <div class="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
              <div class="w-full lg:w-1/2 rounded-l"><img class="object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80" alt="" />
                <div class="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white">
                  <span class="text-sm text-gray-400">24 Jan, 2021</span>
                  <h2 class="my-4 text-2xl font-bold">Morbi scelerisque nulla et lectus dignissim eleifend nulla eu nulla a metus</h2>
                  <p class="mb-4 text-gray-400 leading-loose">Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu dictum. Integer sit amet erat sit amet lectus lacinia mattis. Donec est tortor, fermentum at urna a, accumsan suscipit sem.</p>
                  <a class="text-green-600 hover:text-green-700 font-bold" href="#">Learn More</a>
                </div>
              </div></div>
            <div class="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
              <div class="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white order-1 lg:order-0">
                <span class="text-sm text-gray-400">24 Jan, 2021</span>
                <h2 class="my-4 text-2xl font-bold">Morbi scelerisque nulla et lectus dignissim eleifend nulla eu nulla a metus</h2>
                <p class="mb-4 text-gray-400 leading-loose">Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu dictum. Integer sit amet erat sit amet lectus lacinia mattis. Donec est tortor, fermentum at urna a, accumsan suscipit sem.</p>
                <a class="text-green-600 hover:text-green-700 font-bold" href="#">Learn More</a>
              </div>
              <div class="w-full lg:w-1/2 rounded-l order-0 lg:order-1"><img class="object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80" alt="" />
              </div></div>
            <div class="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
              <div class="w-full lg:w-1/2 rounded-l"><img class="object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80" alt="" />
                <div class="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white">
                  <span class="text-sm text-gray-400">24 Jan, 2021</span>
                  <h2 class="my-4 text-2xl font-bold">Morbi scelerisque nulla et lectus dignissim eleifend nulla eu nulla a metus</h2>
                  <p class="mb-4 text-gray-400 leading-loose">Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu dictum. Integer sit amet erat sit amet lectus lacinia mattis. Donec est tortor, fermentum at urna a, accumsan suscipit sem.</p>
                  <a class="text-green-600 hover:text-green-700 font-bold" href="#">Learn More</a>
                </div>
              </div>
              <div class="mb-8 flex flex-wrap rounded-lg shadow overflow-hidden">
                <div class="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white order-1 lg:order-0">
                  <span class="text-sm text-gray-400">24 Jan, 2021</span>
                  <h2 class="my-4 text-2xl font-bold">Morbi scelerisque nulla et lectus dignissim eleifend nulla eu nulla a metus</h2>
                  <p class="mb-4 text-gray-400 leading-loose">Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu dictum. Integer sit amet erat sit amet lectus lacinia mattis. Donec est tortor, fermentum at urna a, accumsan suscipit sem.</p>
                  <a class="text-green-600 hover:text-green-700 font-bold" href="#">Learn More</a>
                </div>
                <div class="w-full lg:w-1/2 rounded-l order-0 lg:order-1"><img class="object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80" alt="" />
                </div>
                <div class="mb-16 flex flex-wrap rounded-lg shadow overflow-hidden">
                  <div class="w-full lg:w-1/2 rounded-l bg-white"><img class="object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80" alt="" />
                    <div class="w-full lg:w-1/2 py-6 lg:pt-10 px-6 rounded-r bg-white">
                      <span class="text-sm text-gray-400">24 Jan, 2021</span>
                      <h2 class="my-4 text-2xl font-bold">Morbi scelerisque nulla et lectus dignissim eleifend nulla eu nulla a metus</h2>
                      <p class="mb-4 text-gray-400 leading-loose">Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu dictum. Integer sit amet erat sit amet lectus lacinia mattis. Donec est tortor, fermentum at urna a, accumsan suscipit sem.</p>
                      <a class="text-green-600 hover:text-green-700 font-bold" href="#">Learn More</a>
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <nav class="flex items-center bg-white shadow rounded" aria-label="Pagination">
                      <a class="px-4 text-gray-400 hover:text-gray-500" href="#">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                        </svg>
                      </a>
                      <div class="p-2 border-r border-l text-gray-500">
                        <a class="mx-1 px-2 rounded hover:bg-gray-50 hover:text-gray-800" href="#">1</a><a class="mx-1 px-2 rounded bg-gray-50 text-gray-800 font-bold" href="#">2</a><a class="mx-1 px-2 rounded hover:bg-gray-50 hover:text-gray-800" href="#">3</a><a class="mx-1 px-2 rounded hover:bg-gray-50 hover:text-gray-800" href="#">4</a>
                        <span class="mx-3">...</span>
                        <a class="mx-1 px-2 rounded hover:bg-gray-50 hover:text-gray-800" href="#">16</a><a class="mx-1 px-2 rounded hover:bg-gray-50 hover:text-gray-800" href="#">17</a><a class="mx-1 px-2 rounded hover:bg-gray-50 hover:text-gray-800" href="#">18</a>
                      </div>
                      <a class="px-4 text-gray-400 hover:text-gray-500" href="#">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="skew skew-bottom mr-for-radius">
                <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
                  <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
                </svg>
              </div>
              <div class="skew skew-bottom ml-for-radius">
                <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
                  <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
                </svg>
              </div>
            </div>
          </section>
        </BaseLayout>
      </main>
    </div>
  );
};