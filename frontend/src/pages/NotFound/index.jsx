import { useNavigate } from "react-router-dom";
const Comp404 = () => {
  const navigate = useNavigate();
  return (
    <div className="Comp404">
     

      <section class="bg-light">
        <div class="container-fluid">
          <div class="row row-cols-1 justify-content-center py-5">
            <div class="col-xxl-7 mb-4">
              <div class="lc-block">
                <lottie-player
                  src="https://assets9.lottiefiles.com/packages/lf20_u1xuufn3.json"
                  class="mx-auto"
                  background="transparent"
                  speed="1"
                  loop=""
                  autoplay=""
                ></lottie-player>
              </div>
            </div>
            <div class="col text-center">
              <div class="lc-block">
                <div class="lc-block mb-4">
                  <div editable="rich">
                    <p class="rfs-11 fw-light">
                      {" "}
                      The page you are looking for was moved, removed or might
                      never existed.
                    </p>
                  </div>
                </div>
                <div className="buttons" style={{display:'flex',justifyContent:'center',gap:'8%'}}>
                <div class="lc-block">
                  <a class="btn btn-lg btn-primary" href="/" role="button">
                    Back to homepage
                  </a>
                </div>
                <div class="lc-block">
                  <a class="btn btn-lg btn-primary"  role="button" onClick={() => {
          navigate(-1);
        }} >
                 Back 
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Comp404;
