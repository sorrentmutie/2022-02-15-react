interface ProductProps {
    value: number;
}
  
export const Products = (props: ProductProps) =>  <h3>{props.value} prodotti</h3>

export const Products2: React.FC<ProductProps> = (props) => 
  <div>{props.value} prodotti FC</div>