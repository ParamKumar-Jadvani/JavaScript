const navbar_Components = () => {
  return `<nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/Exam/Tourist_Place/HTML/index.html"
          >Home</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                href="/Exam/Tourist_Place/HTML/addProduct.html"
                >Add Product</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login/Signup
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    href="/Exam/Tourist_Place/HTML/login.html"
                    >Login</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="/Exam/Tourist_Place/HTML/signup.html"
                    >Signup</a
                  >
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search" id="searchForm">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="input-search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>`;
};

export { navbar_Components };
