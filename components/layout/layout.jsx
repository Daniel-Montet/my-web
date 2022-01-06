import React, { Children, useState } from "react";
import { HambugerNav, Nav, OtherNav, OverlayNav } from "../navigation/nav";

export function Grid({ fullHeight, stacked, children, navFocus }) {
  let Navigation;
  let content;
  let [isActive, activateOverlayNav] = useState(false);

  if (stacked) {
    Navigation = <Nav navFocus={navFocus} />;
  } else {
    Navigation = <OtherNav />;
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
      <section className="layout-col-1">{Navigation}</section>
      <section className="layout-col-2">
        {content}
        <OverlayNav isActivate={isActive} handleClick={activateOverlayNav} />
        <HambugerNav handleClick={activateOverlayNav} />
      </section>
    </section>
  );
}

function ContentBox({ children }) {
  return <section className="full-vh"> {children} </section>;
}
