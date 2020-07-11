import Link from "next/link";
import Master from "../app_components/commonHeader";
import { get } from "http";

function Post({ post }) {


  return (
    <div class="card mb-4">
      <img class="card-img-top" src={post.thum} alt="Card image cap" />
      <div class="card-body">
        <h2 class="card-title">{post.title}</h2>
        <p class="card-text"></p>
        <Link
          href={"/Blog/post/[id].js"}
          as={`/Blog/post/${post.postId}?thum=${post.thum}&title=${post.title}&author=${post.author}&date=${post.date}`}
        >
          <a class="btn btn-primary">Read More &rarr;</a>
        </Link>
      </div>
      <div class="card-footer text-muted">
        {post.date}
        <hr />
        <a href="#">By {post.author}</a>
      </div>
    </div>
  );
}

export default function Home({ latest, home }) {

  var ref_ = null;

  return (
    <Master>
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
                  <a class="nav-link" href="#">
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
            <div class="col-md-8">
              <h1
                class="my-4 "
                style={{
                  backgroundColor: "#a805da",
                  color: "white",
                  padding: "0.3rem",
                }}
              >
                Blog Posts
                <small></small>
              </h1>

              {home &&
                home.map((post, index) => <Post key={index} post={post} />)}

              <ul class="pagination justify-content-center mb-4">
                <li class="page-item">
                  <a class="page-link" href="#">
                    &larr; Older
                  </a>
                </li>
                <li class="page-item disabled">
                  <a class="page-link" href="#">
                    Newer &rarr;
                  </a>
                </li>
              </ul>
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

function fetcher(url) {
  var data = [];
  const initFetch = new Promise((resolve, reject) => {
    get(url, function (res_) {
      res_.on("data", (chunk) => {
        data.push(chunk);
      });

      res_.on("close", (_) => {
        var data_Bytes = Buffer.concat(data);
        var data_json = JSON.parse(data_Bytes.toString());
        resolve(data_json);
      });
    });
  });

  return initFetch;
}

export async function getServerSideProps(context) {
  const home = await fetcher("http://techserver01.herokuapp.com/posts");
  const latest = await fetcher("http://techserver01.herokuapp.com/latestPosts");

  return {
    props: {
      latest,
      home,
    },
  };
}
