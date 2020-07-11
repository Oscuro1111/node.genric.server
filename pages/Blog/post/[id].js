import Link from "next/link";
import Head from "next/head";
import Master from "../../../app_components/commonHeader";
import { get } from "http";


function PostData({ data }) {
  //data={type:Buffer,data:[]

  return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
}

export default function Post({ latest, postData, title, thum, date }) {

  var ref_ = null;
  return (
    <Master thum={thum} description={title}>
      <Head></Head>
      <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              Tech-Inventory
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href={'/'}>
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <Link href="/about">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <h1 class="mt-4">{title}</h1>

              <hr />
              <p>Posted on {date}</p>
              <hr />

              <img
                class="img-fluid rounded"
                src={thum || "http://placehold.it/750x300"}
                alt=""
              />
              <hr />
              <PostData data={postData} />
            </div>

            <div class="col-md-4">
            <div class="card my-4">
            <h5 class="card-header">Search</h5>
            <div class="card-body">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for..."
                  ref={ref=>{ref_= ref;}}
                />
                <span class="input-group-append">
                  <button onClick={
                    e=>{
                       if(ref_&&ref_.value){
                          window.location.assign(`/search/${ref_.value}`);
                       }
                    }
                  } type ="submit" class="btn btn-secondary">Search</button>
                </span>
              </div>
            </div>
          </div>
              <div class="card my-4">
                <h5 class="card-header">Latest</h5>
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-6">
                      <ul class="list-unstyled mb-0">
                        {latest &&
                          latest.map((post, index) => {
                            return (
                              <li key={index}>
                              <Link
                              href={"/Blog/post/[id].js"}
                              as={`/Blog/post/${post.postId}?thum=${post.thum}&title=${post.title}&author=${post.author}&date=${post.date}`}
                               >
                              <a>{post.title}</a>
                            </Link>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card my-4">
                <h5 class="card-header">Side Widget</h5>
                <div class="card-body">
                  ADS 
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="py-5 bg-dark">
          <div class="container">
            <p class="m-0 text-center text-white">
              Copyright &copy; Your Website 2020
            </p>
          </div>
        </footer>
      </body>
    </Master>
  );
}

function fetcher(url, notJSON) {
  var data = [];
  const initFetch = new Promise((resolve, reject) => {
    get(url, function (res_) {
      res_.on("data", (chunk) => {
        data.push(chunk);
      });

      res_.on("close", (_) => {
        if (notJSON) {
          var data_Bytes = Buffer.concat(data);

          resolve(data_Bytes.toString("utf8"));
        } else {
          var data_Bytes = Buffer.concat(data);
          var data_json = JSON.parse(data_Bytes.toString());
          resolve(data_json);
        }
      });
    });
  });

  return initFetch;
}

export async function getServerSideProps(response) {
  const { id, thum, title, date } = response.query;

  const postData = await fetcher("http://techserver01.herokuapp.com/post/data/" + `${id}`,true);
  const latest = await fetcher("http://techserver01.herokuapp.com/latestPosts",false);

  return {
    props: {
      latest,
      postData,
      thum,
      title,
      date,
    },
  };
}
