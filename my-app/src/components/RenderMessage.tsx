import { Empty } from "./Empty"
import { Products } from "./Product"

export const RenderMessage = (props: any) => {
    return props.products === 0 ? <Empty/> : <Products value = {props.products}/>
  }