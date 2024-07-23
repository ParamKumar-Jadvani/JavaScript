const navbar_Componenets = () => {
  return ` <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href=""
          ><img
            src="/Exam/E_Learning_Website/Images/logo.png"
            class="w-25 h-25"
            alt=""
        /></a>
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
                class="nav-link active"
                aria-current="page"
                href="/Exam/E_Learning_Website/index.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/Exam/E_Learning_Website/Html/dashboard.html"
                >Dashboard</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="/Exam/E_Learning_Website/Html/createCourse.html" id="courses"
                >Create Course page</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href=""
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login/Signup
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    class="dropdown-item"
                    href="/Exam/E_Learning_Website/Html/login.html"
                    >Login Page</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="/Exam/E_Learning_Website/Html/signup.html"
                    >Sign UP Page</a
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" id="course">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="course-search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>`;
};
export default navbar_Componenets;
