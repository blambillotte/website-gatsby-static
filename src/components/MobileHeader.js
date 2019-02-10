import React from "react";
import MobileNavWrapper from "./MobileNavWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MobileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNav: false
    };
  }

  render() {
    const displayNav = this.state.displayNav;
    return (
      <div className="mobile-header">
        <div className="btn-container">
          <span className="mobile-name">Ben Lambillotte</span>
          <button
            className="nav-btn"
            aria-label="Open Nav"
            onClick={() => {
              this.setState({ displayNav: !displayNav });
            }}
          >
            {!!this.state.displayNav ? (
              <FontAwesomeIcon icon={["fas", "times"]} />
            ) : (
              <FontAwesomeIcon icon={["fas", "bars"]} />
            )}
          </button>
        </div>
        {!!this.state.displayNav && <MobileNavWrapper context={this} />}
      </div>
    );
  }
}

export default MobileHeader;
