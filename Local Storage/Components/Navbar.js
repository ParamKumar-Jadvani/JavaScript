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
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Logo</h5>
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
                  class="nav-link active mx-lg-2"
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
                  >Product Add</a
                >
              </li>
              <!-- <li class="nav-item"></li> -->
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
          <span class="navbar-toggler-icon-white"></span>
        </button>
      </div>
    </nav>`;
};

const navbar_Styles = () => {
  return `* {
        box-sizing: border-box !important;
      }
      #navbar {
        position: sticky;
        top: 0;
      }
      .navbar {
        background-color: #000;
        height: 80px;
        margin: 20px;
        border-radius: 16px;
        padding: 0.5rem;
      }
      .navbar-brand {
        font-weight: 500;
        color: #039aff !important;
        font-size: 24px;
        transition: all 0.3s;
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
        background: #006bb3;
      }
      .navbar-toggler {
        border: none;
        font-size: 1.25rem;
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
        color: #fff !important;
      }

      @media (min-width: 991px) {
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
      }`;
};

export { navbar_Components, navbar_Styles };
