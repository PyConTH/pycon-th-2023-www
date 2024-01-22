const Heading2 = (props: { title: string }) => (
  <div className="flex">
    <div className="bg-header-orange text-white font-bold uppercase text-4xl px-2 py-2">
      <h2>{props.title}</h2>
    </div>
  </div>
)

export default Heading2