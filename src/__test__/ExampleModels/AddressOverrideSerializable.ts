import Serializable from "../../Serializable";
import IAddress from "./IAddress";

class AddressOverrideSerializable extends Serializable<IAddress> implements IAddress {
  prefecture: string;
  city: string;

  constructor(prefecture: string, city: string) {
    super();
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

export default AddressOverrideSerializable;
