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
        heading='함께읽고 나누는 독후 활동'
        subHeading='독서 커뮤니티 책장에서 다독러들과 함께 책에 관해 이야기하며 독후
          활동을 해보세요'
      />
      <PlainBanner />
      <HighlightBlock />
      <TransparentBanner />
      <AuthorSuggestBanner />
    </div>
  );
};

export default withTransition(Home);
