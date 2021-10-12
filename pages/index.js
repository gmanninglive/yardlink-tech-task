import Head from "next/head";
import MarketingBanner from "../components/banners/MarketingBanner";
import Categories from "../components/categories/Categories";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Nav from "../components/nav/Nav";
import Featured from "../components/products/Featured";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <Head>
        <title>Tool Hire | Online Tool Hire &amp; Rental | YardLink</title>
        <meta
          name="description"
          content="Hire tool &amp; plant equipment on YardLink. With our online booking process and upfront pricing, plant hire couldn't be easier. Next day delivery available."
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="flex flex-col w-full flex-1 relative">

        <Nav />
        <Hero />
        <MarketingBanner />
        <Featured />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}
