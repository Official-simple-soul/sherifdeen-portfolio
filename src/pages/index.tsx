import Header from '../../components/Header';
import Main from '../../components/Main';
import { useGlobalContext } from '../../context/context';

export default function Home() {
  // const { showNav } = useGlobalContext();

  return (
    <main>
      <Main />
    </main>
  );
}
