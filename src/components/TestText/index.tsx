interface TestTextProps {
    nombre : string
}

function index(prop:TestTextProps) {


  return (
    <div>
      <p>HOLA {prop.nombre} TE QUIERO</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/EfXdsCu_UQE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}

export default index;
