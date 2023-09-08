import React from "react";


function BasicExample() {
    return (
      <>
    <h1 className='text-center '>Cards</h1>
    <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div class="card">
              <img src="https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">bangkok</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Read more</a>              
              </div>
            </div>  
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src="https://media.istockphoto.com/id/466842820/photo/petronas-towers.jpg?s=612x612&w=0&k=20&c=X_Kl-W_ulJEzjvaaT8gRNTQWHboyLKaedXol5EPhGdI=" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">malaysia</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>  <div className="col-md-3">
            <div class="card">
              <img src="https://i0.wp.com/douvle.com/wp-content/uploads/2022/10/7B1CB521-59D0-4016-BDD3-F1A3136E2BBE.jpeg?fit=1600%2C1066&ssl=1" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Indonesia</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>  <div className="col-md-3">
            <div class="card">
              <img src="https://images6.alphacoders.com/501/501450.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Paris</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
        </div>
  
    </div>
      </>
      
    );
  }
  
  export default BasicExample;  