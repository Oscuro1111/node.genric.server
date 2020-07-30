import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/templatemo-blue.css" />
      </Head>
      <main>
        <body
          data-spy="scroll"
          data-target=".navbar-collapse"
          style={{ backgroundColor: "black" }}
        >
          <header>
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-sm-12">
                  <img
                    src="images/tm-easy-profile.png"
                    class="img-responsive img-circle tm-border"
                    alt="templatemo easy profile"
                  />
                  <hr />
                  <h1 class="tm-title bold shadow">Hi, I am Sahil</h1>
                  <h1 class="white bold shadow">Developer</h1>
                </div>
              </div>
            </div>
          </header>

          <section class="container">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="about">
                  <h3 class="accent">About Me</h3>
                  <p>
                    This is my personal blog.I am web developer and like to work
                    on projects and backand tech.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="skills">
                  <h2 class="white">Skills</h2>
                  <strong>Javascript</strong>
                  <span class="pull-right">95%</span>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-primary"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <strong>React</strong>
                  <span class="pull-right">70%</span>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-primary"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <strong>Nodejs</strong>
                  <span class="pull-right">80%</span>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-primary"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <strong>Bootstrap</strong>
                  <span class="pull-right">85%</span>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-primary"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="container">
            <div class="row">
              <div class="col-md-8 col-sm-12">
                <div class="education">
                  <h2 class="white">Education</h2>
                  <div class="education-content">
                    <h4 class="education-title accent">New Web Design</h4>
                    <div class="education-school">
                      <h5>High school</h5>
                      <span></span>
                      <h5>2015 March - 2017 March</h5>
                    </div>
                    <p class="education-description">
                      Studied Science And High school Mathematics. In Colleage
                      Studied computer programming.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12">
                <div class="languages">
                  <h2>Languages</h2>
                  <ul>
                    <li>English</li>
                    <li>Hindi</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section class="container">
            <div class="row">
              <div class="col-md-4 col-sm-12">
                <div class="contact">
                  <h2>Contact</h2>
                  <p>
                    <i class="fa fa-map-marker"></i>India ,HP
                  </p>

                  <p>
                    <i class="fa fa-envelope"></i> sahiljarial1999@gmail.com
                  </p>
                  <p>
                    <i class="fa fa-globe"></i>www.tech-inventory.com
                  </p>
                </div>
              </div>
              <div class="col-md-8 col-sm-12">
                <div class="experience">
                  <h2 class="white">Experiences</h2>
                  <div class="experience-content">
                    <h4 class="experience-title accent">Website Development</h4>

                    <h5>2019 Feb - current</h5>
                  </div>
                </div>
              </div>
            </div>

            <div onClick={e=>location.assign("/")}  style={{"font-size":"30px"}} className="btn btn-primary">Back</div>
          </section>

          <footer>
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-sm-12">
                  <p>Copyright &copy; 2020 Tech-Inventory</p>
                  <ul class="social-icons">
                    <li>
                      <a
                        href="https://www.facebook.com/sahiljC1999"
                        class="fa fa-facebook"
                      ></a>
                    </li>

                    <li>
                      <a
                        href="https://github.com/Oscuro1111"
                        class="fa fa-github"
                      ></a>
                    </li>
          
                    <li>
                      <a
                        href="https://twitter.com/Oscuro17578004"
                        class="fa fa-twitter"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>

          <script src="js/jquery.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/jquery.backstretch.min.js"></script>
          <script src="js/custom.js"></script>
        </body>
      </main>
    </>
  );
}
