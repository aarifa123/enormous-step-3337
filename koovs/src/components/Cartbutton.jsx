import { Badge, Button } from "@chakra-ui/react";
import { SatelliteSharp, ShoppingCartOutlined } from "@material-ui/icons";

export default function CartButton({ itemCount }) {
  // const quantity= useSelector((state) => state.cart.quantity);

  // console.log(quantity,"i am quantit")
  
  
  
  
  
  return (
    <Button background={"none"}>
      
      <ShoppingCartOutlined />
      <Badge variant="solid"  mr="1" borderRadius={"50%"} marginBottom={"20px"} background={"black"}>
        {itemCount}
      </Badge>
    </Button>
  );
}

