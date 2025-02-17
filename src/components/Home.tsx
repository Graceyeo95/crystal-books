import HeroBanner from './common/HeroBanner';
import withTransition from '../HOC/withTransition';
import HighlightBlock from './common/HighlightBlock';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <HighlightBlock />
    </div>
  );
};

export default withTransition(Home);
