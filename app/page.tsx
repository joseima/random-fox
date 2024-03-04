import { NextPage } from "next";
import { RandomFox } from "./components/RandomFox";

const random = () => Math.floor(Math.random() * 123) + 1;

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-6">Random Fox</h1>
      <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`} />
    </main>
  );
}

export default  Home