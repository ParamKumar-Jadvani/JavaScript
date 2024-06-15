const navbar_Styles = () => {
  return `* {
    box-sizing: border-box !important;
  }
  #navbar {
    position: static !important;
    top: 0;
    z-index: 9999 !important;
  }
  .navbar {
    background-color: #000 !important;
    height: 80px;
    margin: 20px;
    border-radius: 16px;
    padding: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
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
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #039aff;
    margin-right: 10px;
  }
  .navbar-toggler-icon {
    background-color: white;
    border-radius: 2px !important;
  }
  .navbar-toggler {
    margin: 0 !important;
    padding: 2px !important;
    border: 1px solid aliceblue !important;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px !important;
  }
  `;
};

export { navbar_Styles };
