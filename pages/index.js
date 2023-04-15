import ItemCard from "@/components/ItemCard";
import ProfileCard from "@/components/ProfileCard";
import { PorfolioItems } from "@/PortfolioItems";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Edema Ero - Frontend Developer</title>
      </Head>
      <main className="App">
        <ProfileCard />
        <div className="Portfolio">
          <div className="items">
            {PorfolioItems
              ? PorfolioItems.map((item, index) => (
                  <ItemCard
                    key={index}
                    title={item.title}
                    image={item.image}
                    link={item.link}
                  >
                    {item.info}
                  </ItemCard>
                ))
              : ""}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
