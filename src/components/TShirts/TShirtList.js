import { useContext } from "react";
import TShirtContext from "../../store/tshirt-context";
import TShirtItem from "./TShirtItem";

const TShirtList = () => {
  const TShirtCtx = useContext(TShirtContext);
  return (
    <>
      {TShirtCtx.TShirts.map((item) => (
        <TShirtItem
          key={item.name}
          name={item.name}
          des={item.des}
          price={item.price}
          large={item.large}
          medium={item.medium}
          small={item.small}
        />
      ))}
    </>
  );
};
export default TShirtList;
