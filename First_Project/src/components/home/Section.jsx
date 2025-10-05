import "./Section.css";

function Section() {
  return (
    <div>
      <section className="hero text-center text-white d-flex flex-column justify-content-center align-items-center">
        <h1>Welcome to My-Mart</h1>
        <div className="col-10 col-md-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            maiores suscipit maxime doloribus excepturi dolor facere soluta
            error perspiciatis aspernatur libero incidunt tempora assumenda
            doloremque quos possimus quaerat, voluptate fuga?
          </p>
        </div>
        <button className="btn btn-success mt-3">
          <i className="fas fa-store me-2"></i>
          Explore More !!!
        </button>
      </section>
    </div>
  );
}

export default Section;
