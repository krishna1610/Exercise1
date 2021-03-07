import React from "react";

class AppIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnName: ["Main call to action", "Secondary action", "Actions"],
      activeBtn: 0,
    };
    this.btnClicked = this.btnClicked.bind(this);
  }

  btnClicked(index) {
    console.log(index);
    this.setState({ activeBtn: index });
  }
  render() {
    return (
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Album example</h1>
            <p className="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              {this.state.btnName.map((name, index) => {
                return (
                  <a
                    href="#"
                    className={
                      "btn " +
                      (index === this.state.activeBtn
                        ? "btn-primary"
                        : "btn-secondary") +
                      " my-2 mx-1"
                    }
                    key={index}
                    onClick={() => {
                      this.btnClicked(index);
                    }}
                  >
                    {name}
                  </a>
                );
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AppIntro;
