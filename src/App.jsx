import "./styles/theme.css";
import "./styles/global.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LuckyNumber } from "./components/LuckyNumber";

export default function App() {

  return (
    //React Fragment
    <>
      <Header />
      <LuckyNumber />
      <Footer />
    </>
  );
}
