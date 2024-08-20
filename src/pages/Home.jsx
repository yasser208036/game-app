import Slider from "../components/Slider";
import GamesList from "../components/GamesList";

export default function Home() {
  return (
    <>
      <Slider />
      <section className="spikes"></section>
      <GamesList />
    </>
  );
}
