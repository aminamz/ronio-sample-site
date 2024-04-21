import Particle from "./components/Particle/Particle";
import CardSection from "./components/CardSection";

export type Category = {
  id: number;
  name: string;
  faTitle: string;
  ukTitle: string;
};

type categories = Category[];

export default async function Home() {
  const data: categories = await getCategories();
  return (
    <main className="flex flex-col h-600 items-center">
      <Particle />
      {data.map((item) => (
        <CardSection key={item.id} category={item} />
      ))}
    </main>
  );
}

async function getCategories() {
  const result = await fetch("http://127.0.0.1:3001/categories");
  const data: categories = await result.json();
  return data;
}
