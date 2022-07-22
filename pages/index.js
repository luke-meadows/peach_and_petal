import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/Header';
import ProductThumbnail from '../components/product/ProductThumbnail';

import lingerie from '../public/images/lingerie.png';
import nightwear from '../public/images/nightwear.png';
import newIn from '../public/images/new-in.png';
import Hero from '../components/home/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Peach and Petal - Lingerie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="flex justify-evenly m-24 gap-x-24">
        <ProductThumbnail title="Lingerie" image={lingerie} />
        <ProductThumbnail title="Nightwear" image={nightwear} />
        <ProductThumbnail title="New In" image={newIn} />
      </div>
    </div>
  );
}
