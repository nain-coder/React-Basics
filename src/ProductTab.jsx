import Product from "./Product";

export default function ProductTab(){
    return (
      <>
      
        <Product title="phone" price={30000} />
        <Product title="laptop" price={40000} />
        <Product title="pen" price={30} />
      </>
    );
}