import Tree from "../svg/tree";
import styles from "./me.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Profile({ about, handleNavState, navState }) {
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      let { profile, home, posts } = navViewState;
      handleNavState({ profile: true, home: false, posts: false });
    }
    return;
  }, [inView]);

  return (
    <section className="inner-section profile" id="profile">
      <section className="col-1">
        <div>
          <h2 className="large-page-title" ref={ref}>
            {about.title}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: about.html }}></div>
        </div>
      </section>
      <section className="col-2">
        <Tree />
      </section>
    </section>
  );
}
