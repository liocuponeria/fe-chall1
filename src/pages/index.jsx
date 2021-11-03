import Header from "../components/Header";
import Card from "../components/Card";
import Buttons from "../components/Buttons";
import styles from "./index.module.css";
import { ApiContextProvider } from "../Context/apicontext";

export default function Home() {
  return (
    <div>
      <ApiContextProvider>
        <Header />

        <Card />
      </ApiContextProvider>
    </div>
  );
}
