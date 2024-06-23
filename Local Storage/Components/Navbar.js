const navbar_Components = () => {
  return `<nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand me-auto" href="/Local Storage/index.html"
          >Logo</a
        >
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <a href="/Local Storage/index.html">Logo</a>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li class="nav-item">
                <a
                  class="nav-link active mx-lg-2 text-lg-light text-dark"
                  aria-current="page"
                  href="/Local Storage/index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active mx-lg-2"
                  href="/Local Storage/HTML/Product.html"
                  >Product</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active mx-lg-2"
                  href="/Local Storage/HTML/Add_Product.html"
                  >Product Form</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active mx-lg-2"
                  href="/Local Storage/HTML/CartPage.html"
                  >Cart</a
                >
              </li>
              <li class="nav-item">
                <div class="container-fluid">
                  <form class="d-flex" role="search" id="search">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      id="input-search"
                    />
                    <button class="btn" id="search-btn" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <a href="/Local Storage/HTML/Login.html" class="login-button mx-1"
          >Login</a
        >
        <a class="login-button mx-1" href="/Local Storage/HTML/Signup.html"
          >Sign Up</a
        >
        <button
          class="navbar-toggler pe-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span><img src="/Local Storage/Images/menu-bar.png" alt="" /></span>
        </button>
      </div>
    </nav>`;
};

const navbar_Styles = () => {
  return `* {
        box-sizing: border-box !important;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif !important;
      }

      #navbar {
        position: sticky;
        top: 0;
      }
      .navbar {
        background-color: #000;
        height: 80px;
        padding: 0.5rem;
        z-index: 9999;
      }
      .navbar-brand,
      .offcanvas-title > a {
        font-weight: 500;
        color: #039aff !important;
        font-size: 24px;
        transition: all 0.3s;
        text-decoration: none !important;
      }

      .offcanvas-title > a:hover {
        color: #000 !important;
      }
      .navbar-brand:hover {
        color: #fff !important;
      }
      .login-button {
        background: #039aff;
        color: #fff;
        font-size: 14px;
        padding: 8px 20px;
        border-radius: 50px;
        text-decoration: none;
        transition: all 0.3s;
      }
      .login-button:hover {
        background: #fff;
        color: #039aff;
        border-color: #006bb3;
        border: 1px solid;
        border-color: #039aff !important;
        border: 1px solid !important;
        box-shadow: rgba(255, 255, 255, 0.56) 0px 22px 70px 4px !important;
      }
      .navbar-toggler {
        border: none;
        font-size: 1.25rem;
        background-color: #000;
      }
      .navbar-toggler:focus,
      .btn-close:focus {
        box-shadow: none;
        outline: none;
      }
      .nav-link {
        color: #666777 !important;
        font-weight: 500;
        position: relative;
      }
      .nav-link:hover,
      .nav-link.active {
        color: #000 !important;
      }

      @media (min-width: 991px) {
        .nav-link:hover,
        .nav-link.active {
          color: #fff !important;
        }
      }
      .nav-link::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: #039aff;
        visibility: hidden;
        transition: 0.3s ease-in-out;
      }
      .nav-link:hover::before {
        width: 100%;
        visibility: visible;
      }

      #search-btn {
        background-color: #039aff;
        color: #fff;
        transition: all 0.3s ease-in-out;
        padding: 8px 20px;
        border-radius: 50px;
        font-size: 14px;
      }
      #search-btn:hover {
        background: #fff;
        color: #039aff;
        border-color: #006bb3;
        border: 1px solid;
        border-color: #039aff !important;
        border: 1px solid !important;
        box-shadow: rgba(255, 255, 255, 0.56) 0px 22px 70px 4px !important;
      }

      #input-search {
        transition: all 0.3s ease-in-out !important;
        padding: 8px 20px;
        border-radius: 50px;
        font-size: 14px;
      }
      #input-search:hover {
        border-color: #039aff !important;
        border: 1px solid !important;
        box-shadow: rgba(255, 255, 255, 0.56) 0px 22px 70px 4px !important;
      }`;
};

export { navbar_Components, navbar_Styles };
