const header = document.createElement('header');

header.innerHTML = `

`;

document.body.appendChild(header.content);






const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #0a0a23;
      position: sticky;
      top:0;
    }

    ul {
      padding: 0;
    }

    ul li {
      list-style: none;
      display: inline;
    }

    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
   <!-- Header -->
<header>
    <div class="d-flex justify-content-between align-items-center" style="height: 100px; background-color: lightblue;">
        <div class="p-3 logo"><img src="assets/icons/logo.svg" style="width: 60%;"></div>
        <div class="p-3 bone"><img src="assets/icons/bone.svg" style="height: 40px;"></div>
    </div>
</header>

<!-- Navigation -->
<nav class="navbar sticky-top navbar-light bg-light bg-body-tertiary navbar-expand-lg">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Startsida</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Om oss</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Nyheter</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Våra hundar</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Kullar
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Köpa valp
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Frågor och svar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Hälsningar</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);