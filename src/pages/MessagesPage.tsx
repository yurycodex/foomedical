// This example requires Tailwind CSS v2.0+
// https://tailwindui.com/components/application-ui/page-examples/detail-screens
import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
};
const comments = [
  {
    id: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
  },
  {
    id: 2,
    name: 'Michael Foster',
    date: '4d ago',
    imageId: '1519244703995-f4e0f30006d5',
    body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
];

export default function MessagesPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="mb-auto pb-16">
        <div className="mt-8 max-w-3xl mx-auto sm:px-6 lg:max-w-4xl">
          <section aria-labelledby="notes-title">
            <div className="bg-white border sm:rounded-lg sm:overflow-hidden">
              <div className="divide-y divide-gray-200">
                <div className="px-4 py-5 sm:px-6">
                  <h2 id="notes-title" className="text-lg font-medium text-gray-900">
                    Messages
                  </h2>
                </div>
                <div className="px-4 py-6 sm:px-6">
                  <ul role="list" className="space-y-8">
                    {comments.map((comment) => (
                      <li key={comment.id}>
                        <div className="flex space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-sm">
                              <a href="#" className="font-medium text-gray-900">
                                {comment.name}
                              </a>
                            </div>
                            <div className="mt-1 text-sm text-gray-700">
                              <p>{comment.body}</p>
                            </div>
                            <div className="mt-2 text-sm space-x-2">
                              <span className="text-gray-500 font-medium">{comment.date}</span>{' '}
                              <span className="text-gray-500 font-medium">&middot;</span>{' '}
                              <button type="button" className="text-gray-900 font-medium">
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-6 sm:px-6">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <form action="#">
                      <div>
                        <label htmlFor="comment" className="sr-only">
                          About
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          rows={3}
                          className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Add a note"
                          defaultValue={''}
                        />
                      </div>
                      <div className="mt-3 flex flex-row-reverse">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}