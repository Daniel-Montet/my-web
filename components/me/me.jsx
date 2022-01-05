import Tree from "../svg/tree";
import styles from "./me.module.css";

export default function Profile({ about }) {
  return (
    <section className="inner-section profile" id="profile">
      <section className="col-1">
        <div>
          <h2 className="large-page-title">{about.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: about.html }}></div>
        </div>
      </section>
      <section className="col-2">
        <Tree />
      </section>
    </section>
  );
}
