import Head from "next/head";
import Homepage from "@/components/homepage comps/homepage";
export default function Home() {
  return (
    <>
      <Head>
        <title>Venom</title>
        <meta name="description" content="Men Clothes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Letter_V_blue_34853.ico" />
      </Head>
      
      <Homepage/>
    </>
  );
}
