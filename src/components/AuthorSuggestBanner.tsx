import hangang1 from '../assets/han-gang1.jpg';
import hangang2 from '../assets/han-gang2.jpg';
import hangang3 from '../assets/han-gang3.jpg';

const hanGangBooks = [hangang1, hangang2, hangang3];

const AuthorSuggestBanner = () => {
  return (
    <div className='w-full z-10 text-white bg-navy py-32'>
      <div className='grid grid-cols-1 lg:grid-cols-6 mx-auto max-w-[85vw] lg:max-w-[90vw]'>
        <div className='col-span-2 m-auto text-center lg:text-left flex flex-col'>
          <p className='subHeadingText font-bold'>
            베스트셀러 작가 한강의
            <br />꼭 읽어야 할 작품들!
          </p>
          <p className='smallBodyText mt-2'>
            문학계를 사로잡은 한강의 대표작을 만나보세요. 깊이 있는 스토리와
            감동을 경험할 시간!
          </p>
        </div>

        <div className='flex flex-wrap lg:flex-nowrap lg:col-span-4 gap-4 items-center justify-center mx-auto xl:gap-x-8 mt-8'>
          {hanGangBooks.map((book, index) => (
            <img
              key={`hangang-book-${index}`}
              src={book}
              alt='hangang-book'
              className='w-[200px] lg:w-1/4 aspect-[2/3]'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorSuggestBanner;
