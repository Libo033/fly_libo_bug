import { AuthContextProvider } from "@/Context/AuthContext";
import { FlyContextProvider } from "@/Context/FlyContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FlyContextProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </FlyContextProvider>
  );
}
