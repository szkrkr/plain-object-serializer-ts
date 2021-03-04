import ISerializable from "../../ISerializable";
import IAddress from "./IAddress";
import IMember from "./IMember";

class MemberImplementsISerializable implements IMember, ISerializable<IMember> {
  name: string;
  address: IAddress & ISerializable<IAddress>;

  constructor(name: string, address: IAddress & ISerializable<IAddress>) {
    this.name = name;
    this.address = address;
  }

  toObject = (): IMember => {
    return {
      name: this.name,
      address: this.address.toObject(),
    } as IMember;
  };
}

export default MemberImplementsISerializable;