import Header from "../../components/Header";

export default function View({ info }) {
  return (
    <div>
      <Header />
      <div>
        <img
          style={{ width: "300px", marginTop: "300px" }}
          src={info.image}
          alt=''
        />
        <h1>R$ {info.price}</h1>
        <div className='container'>
          <h4 style={{ maxWidth: "300px" }}>{info.description}</h4>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const json = await res.json();
  console.log(json);
  return {
    props: {
      info: json,
    },
  };
}
