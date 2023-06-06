import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/layouts/Layout";
import { ProductsProvider } from "@/contexts/ProductsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ProductsProvider>
        <Component {...pageProps} />
      </ProductsProvider>
    </Layout>
  );
}
