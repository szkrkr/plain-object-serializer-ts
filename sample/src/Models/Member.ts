import { Serializable, ISerializable } from "plain-object-serializer-ts/dist"
import IAddress from "./IAddress";
import IMember from "./IMember";

class Member extends Serializable<IMember> implements IMember {
  name: string;
  address: IAddress & ISerializable<IAddress>;

  constructor(name: string, address: IAddress & ISerializable<IAddress>) {
    super();
    this.name = name;
    this.address = address;
  }
}

export default Member;
