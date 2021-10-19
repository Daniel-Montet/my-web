import React, { Children, useState } from "react";
import { HambugerNav, Nav, OtherNav } from "../navigation/nav";

export function Grid({ fullHeight, stacked, children }) {
  let Navigation;
  let content;
  let [mobileViewNavState, changeMobileViewNavState] = useState(false);

  if (stacked) {
    Navigation = Nav;
  } else {
    Navigation = OtherNav;
  }

  if (fullHeight) {
    content = React.Children.map(children, (child) => {
      return <ContentBox>{child} </ContentBox>;
    });
  } else {
    content = children;
  }

  return (
    <section className="layout-grid">
      <section className="layout-col-1">
        <Navigation mobileNavState={mobileViewNavState} />
      </section>
      <section className="layout-col-2">
        {content}
        <HambugerNav handleClick={changeMobileViewNavState} />
      </section>
    </section>
  );
}

function ContentBox({ children }) {
  return <section className="full-vh"> {children} </section>;
}
