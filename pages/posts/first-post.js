import Link from 'next/link';
import Head from 'next/head';

const a = ()=>{
  var i  =10 ;
  let a =11;
  const name  = "What the heck"; 
}

export default function FirstPost() {
  return (<>
    <Head>
      <title>Post</title>
    </Head>
       <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
  </>);
}
