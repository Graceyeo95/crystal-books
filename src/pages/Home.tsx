import HeroBanner from '@/components/HeroBanner';
import withTransition from '@/HOC/withTransition';
import HighlightBlock from '@/components/HighlightBlock';
import TransparentBanner from '@/components/TransparentBanner';

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
