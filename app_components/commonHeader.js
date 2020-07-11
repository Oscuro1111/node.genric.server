import Head from 'next/head';
export default function Master({children,thum,description}){

    return (
        <>
        <Head>
          
        <title>Tech-Inventory</title>
   
        <link rel="stylesheet" href="/bootstrap/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/blog-home.css" />
        <script src="/jquery/dist/jquery.js"></script>
        <script src="/popper.js/dist/popper.js"></script>
        <script src="/bootstrap/dist/js/bootstrap.js"></script>
        <script data-ad-client="ca-pub-4337835308913408" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
        name="description"
        content={description||"Tech-Inventory web site for technical topics."}
      />
     <meta property="og:image" content={thum||'/ms-icon-310x310.png'} />
      </Head>
      {children}
        </>
    );
} 