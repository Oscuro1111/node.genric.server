
function Post(){


    return (

        <div class="row">
          <div class="col-md-8">
            <h1 class="my-4">
              Tech-Inventory
              <small>Blog related to technical topics.</small>
            </h1>

            <div class="card mb-4">
              <img
                class="card-img-top"
                src="http://placehold.it/750x300"
                alt="Card image cap"
              />
              <div class="card-body">
                <h2 class="card-title">Post Title</h2>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. R
                  eiciendis aliquid atque, nulla? Quos cum ex qu is soluta, a
                  laboriosam. Dicta expedita corp oris animi vero voluptate vo
                  luptatibus possimus, veniam magni quis!
                </p>
                <a href="#" class="btn btn-primary">
                  Read More &rarr;
                </a>
              </div>
              <div class="card-footer text-muted">
                Posted on January 1, 2020 by
                <a href="#">Start Bootstrap</a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default function Blogs() {
  return (
    <>
      <div class="container" style={{"z-index":"-1"}}>
        <Post />
      </div>
    </>
  );
}


