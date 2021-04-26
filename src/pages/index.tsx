import Header from '../components/Header';
import Featured from '../components/Home/Featured';
import Discover from './../components/Home/Discover/index';

export default function Home() {
  return (
    <>
      <Header />
      <Discover />
      <Featured />
    </>
  );
}
