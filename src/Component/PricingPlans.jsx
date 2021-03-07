import React from "react";

class PricingPlans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [
        {
          name: "Free",
          price: 0,
          noOfUsers: 10,
          totalStorage: 2,
          support: "Email",
          btnName: "Sign up for free",
        },
        {
          name: "Pro",
          price: 15,
          noOfUsers: 20,
          totalStorage: 10,
          support: "Priority email",
          btnName: "Get Started",
        },
        {
          name: "Enterprise",
          price: 29,
          noOfUsers: 30,
          totalStorage: 15,
          support: "Phone and email",
          btnName: "Contact us",
        },
      ],
      planSelected: 0,
    };
  }

  btnClicked(index) {
    console.log(index + " selected");
    this.setState({ planSelected: index });
  }
  render() {
    return (
      <div className="container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Pricing</h1>
          <p className="lead">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {this.state.plans.map((item, index) => {
            return (
              <div className="col" key={index}>
                <div className="card mb-4 shadow-sm">
                  <div className="card-header">
                    <h4 className="my-0 fw-normal">{item.name}</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      ${item.price} <small className="text-muted">/ mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>{item.noOfUsers} users included</li>
                      <li>{item.totalStorage} GB of storage</li>
                      <li>{item.support} support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      className={
                        "w-100 btn btn-lg " +
                        (index === this.state.planSelected
                          ? "btn-outline-primary"
                          : "btn-primary")
                      }
                      onClick={() => {
                        this.btnClicked(index);
                      }}
                    >
                      {item.btnName}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PricingPlans;
