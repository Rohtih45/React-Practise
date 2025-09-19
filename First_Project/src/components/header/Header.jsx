import "./Header.css";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a class="navbar-brand" href="#">
          BrandName
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Shop
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                ContactUs
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center gap-3">
            <a href="#">
              <i class="fas fa-shopping-bag text-white fs-5"></i>
            </a>
            <button class="btn btn-danger">Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
