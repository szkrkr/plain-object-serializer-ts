import Serializable from "plain-object-serializer-ts/dist/Serializable";
import IAddress from "./IAddress";

class AddressExtendingSerializable extends Serializable<IAddress> implements IAddress {
  prefecture: string;
  city: string;

  constructor(prefecture: string, city: string) {
    super();
    this.prefecture = prefecture;
    this.city = city;
  }
}

export default AddressExtendingSerializable;
