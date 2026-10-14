import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="dark">
      <Head>
        <link rel="icon" type="image/png" href="/aceman.png" />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute("data-theme", localStorage.getItem("theme") || "dark");`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}