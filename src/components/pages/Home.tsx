import HeroBanner from '../banners/HeroBanner';
import withTransition from '@/HOC/withTransition';
import HighlightBlock from '../banners/HighlightBlock';
import TransparentBanner from '../banners/TransparentBanner';

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
