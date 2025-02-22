import HeroBanner from './common/HeroBanner';
import withTransition from '../HOC/withTransition';
import HighlightBlock from './common/HighlightBlock';
import TransparentBanner from './common/TransparentBanner';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <HighlightBlock />
      <TransparentBanner />
      <div className='h-[600px] bg-black' />
    </div>
  );
};

export default withTransition(Home);
