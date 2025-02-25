import withTransition from '@/HOC/withTransition';
import { HeroBanner } from '@/components';
import library from '@/assets/library.avif';
import { useEffect, useState } from 'react';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { QuoteCard, BookCard } from '@/components';

const Favourites = () => {
  const { books, quotes, loadFavorites } = useFavoritesStore();
  const [selectedCategory, setSelectedCategory] = useState<'book' | 'quote'>(
    'book'
  );

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  const filterCategory = ['book', 'quote'];

  type CategoryType = 'book' | 'quote';

  return (
    <div className='h-full w-full bg-white'>
      <HeroBanner
        image={{
          src: library,
          alt: 'Library Background',
        }}
        heading='저장한 모든 책과 명언을 즐겨보세요'
      />

      <div className='container-wrapper max-w-[90vw] lg:max-w-[80vw] mx-auto'>
        <div className='bg-white text-orange mediumBodyText'>
          <div className='flex gap-x-12 justify-center'>
            {filterCategory.map((item) => {
              const isActive = selectedCategory === item;
              const category = item.charAt(0).toUpperCase() + item.slice(1);
              return (
                <button
                  key={`category-${item}`}
                  onClick={() => setSelectedCategory(item as CategoryType)}
                  className={`cursor-pointer ${
                    isActive ? 'border-b-2 border-orange' : 'border-none'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Display the filtered favorites */}
        <div className='grid grid-cols-6 lg:grid-cols-12 mt-12 gap-y-8 md:gap-y-12 gap-x-4'>
          {selectedCategory === 'quote'
            ? quotes.map((item, index) => (
                <div
                  key={`favourite-quote-${index}`}
                  className='col-span-6 md:col-span-3 lg:col-span-4 xl:col-span-3'
                >
                  <QuoteCard
                    id={item.quoteText}
                    imageUrl={item.imageUrl}
                    quoteText={item.quoteText}
                  />
                </div>
              ))
            : books.map((item) => {
                return (
                  <div
                    key={`favourite-book-${item.title}`}
                    className='col-span-6 sm:col-span-3 lg:col-span-4 xl:col-span-3'
                  >
                    <BookCard
                      bookId={item.id}
                      imageUrl={item.imageUrl}
                      title={item.title}
                    />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default withTransition(Favourites);
