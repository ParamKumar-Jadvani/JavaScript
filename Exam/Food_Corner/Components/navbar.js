const navbar_Components = () => {
  return `<nav class="d-flex flex-row justify-content-evenly">
      <div>
      <a class="navbar-brand" href="/Exam/Food_Corner/index.html"
        ><img id="img" src="/Exam/Food_Corner/Images/logo.png" alt=""
      /></a></div>
      <div class="d-flex justify-content-center">
        <div>
          <a class="nav-link active" href="/Exam/Food_Corner/index.html"
            >Home</a
          >
        </div>
        <div>
          <a class="nav-link" href="/Exam/Food_Corner/Html/login.html">Login</a>
        </div>
        <div>
          <a class="nav-link" href="/Exam/Food_Corner/Html/signup.html"
            >Sign UP</a
          >
        </div>
        <div>
          <a class="nav-link" href="/Exam/Food_Corner/Html/cartPage.html"
            >Cart Page</a
          >
        </div>
      </div>
    </nav>`;
};
const navbar_Styles = () => {
  return ` .navbar-brand {
        height: 100px !important;
        width: 100px !important;
        
      }
        #img {
        height: 100px !important;
        width: 100px !important;
          object-fit: cover !important;
        }
          .nav  .nav-item {
          padding: 0 !important;
          margin: 0 !important;
          gap: 0 !important;}`;
};

export { navbar_Components, navbar_Styles };
