import {
  HeroBanner,
  PlainBanner,
  HighlightBlock,
  TransparentBanner,
  AuthorSuggestBanner,
} from '@/components';
import withTransition from '@/HOC/withTransition';
import library from '@/assets/library.avif';

const Home = () => {
  return (
    <div>
      <HeroBanner
        isBigBanner
        image={{
          src: library,
          alt: 'Library Background',
        }}
        heading='책과 명언을 나만의 공간에 저장'
        subHeading='책과 명언, 언제든지 찾아보고 즐겨찾기 할 수 있어요'
      />
      <PlainBanner />
      <HighlightBlock />
      <TransparentBanner />
      <AuthorSuggestBanner />
    </div>
  );
};

export default withTransition(Home);
