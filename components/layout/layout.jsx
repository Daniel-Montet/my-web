export default function Layout({Nav,Content}) {
    return (
        <section className="grid">
      <section className="item1">
        <Nav />
      </section>
      <section className="item2">
        <Content />
      </section>
    </section>
    )
}