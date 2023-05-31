import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-admin App</title>
        <meta name="description" content="Administrador de productos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row justify-center items-center h-full">
        <h1>DASHBOARD</h1>
      </div>
    </>
  );
}
