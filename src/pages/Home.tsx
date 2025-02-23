import {
  HeroBanner,
  PlainBanner,
  HighlightBlock,
  TransparentBanner,
  AuthorSuggestBanner,
} from '@/components';
import withTransition from '@/HOC/withTransition';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <PlainBanner />
      <HighlightBlock />
      <TransparentBanner />
      <AuthorSuggestBanner />
    </div>
  );
};

export default withTransition(Home);
