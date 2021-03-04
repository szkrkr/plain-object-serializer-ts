import ISerializable from "../../ISerializable";
import IAddress from "./IAddress";

class AddressImplementsISerializable implements IAddress, ISerializable<IAddress> {
  prefecture: string;
  city: string;

  constructor(prefecture: string, city: string) {
    this.prefecture = prefecture;
    this.city = city;
  }

  toObject = (): IAddress => {
    return {
      prefecture: this.prefecture,
      city: this.city,
    } as IAddress;
  };
}

export default AddressImplementsISerializable;
