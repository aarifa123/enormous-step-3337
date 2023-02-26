import { Badge, Button } from "@chakra-ui/react";
import { ShoppingCartOutlined } from "@material-ui/icons";

export default function CartButton({ itemCount }) {
  return (
    <Button background={"none"}>
      
      <ShoppingCartOutlined />
      <Badge variant="solid"  mr="1" borderRadius={"50%"} marginBottom={"20px"} background={"black"}>
        {itemCount}
      </Badge>
    </Button>
  );
}

