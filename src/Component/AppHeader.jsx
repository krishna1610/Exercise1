import React from "react";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ["Home", "Features", "Pricing", "About", "Contact"],
      activeLink: 0,
    };
    this.linkClicked = this.linkClicked.bind(this);
  }

  linkClicked(event, index) {
    console.log(index + "clicked");
    this.setState({ activeLink: index });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {this.state.links.map((linkName, index) => {
                console.log(this.state.activeLink, index);
                return (
                  <li className="nav-item" key={index}>
                    <a
                      className={
                        "nav-link " +
                        (index === this.state.activeLink ? "active" : "")
                      }
                      href="#"
                      onClick={(event) => {
                        this.linkClicked(event, index);
                      }}
                    >
                      {linkName}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppHeader;
