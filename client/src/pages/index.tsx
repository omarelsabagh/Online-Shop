import Head from "next/head";
import Homepage from "@/components/homepage comps/homepage";
export default function Home() {
  return (
    <>
      <Head>
        <title>Venom</title>
        <meta name="description" content="Women Fashion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Dapino-People-With-Hat-Miss-purple-hat.ico" />
      </Head>
      
      <Homepage/>
    </>
  );
}
