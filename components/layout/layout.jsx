import React, { Children } from "react";
import { Nav, OtherNav } from "../navigation/nav";

export function Grid({ fullHeight, stacked, children }) {
  let Navigation;
  let content;

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
        <Navigation />
      </section>
      <section className="layout-col-2">{content}</section>
    </section>
  );
}

function ContentBox({ children }) {
  return <section className="full-vh"> {children} </section>;
}
