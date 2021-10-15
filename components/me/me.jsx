import Tree from "../svg/tree";
import styles from "./me.module.css";

export default function Profile(props) {
  return (
    <section className="inner-section profile" id="profile">
      <section className="col-1">
        <div>
          <h2 className="large-page-title">A little bit about myself.</h2>
          <p>
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero
            malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut
            libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui.
          </p>
          <p>
            Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere
            blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
            a. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
            sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a. Pellentesque in ipsum id orci porta dapibus.
          </p>
        </div>
      </section>
      <section className="col-2">
        <Tree />
      </section>
    </section>
  );
}
