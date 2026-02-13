type CoreConceptProps = {
  title: string;
  description: string;
  image: string;
}

export function CoreConcept({ title, description, image }: CoreConceptProps) {
  return (
    <section>
      <img src={image} width="20%"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  )
}