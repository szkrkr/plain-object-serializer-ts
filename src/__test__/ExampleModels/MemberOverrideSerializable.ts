import ISerializable from "../../ISerializable";
import Serializable from "../../Serializable";
import IAddress from "./IAddress";
import IMember from "./IMember";

class MemberOverrideSerializable extends Serializable<IMember> implements IMember {
  name: string;
  address: IAddress & ISerializable<IAddress>;

  constructor(name: string, address: IAddress & ISerializable<IAddress>) {
    super();
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

export default MemberOverrideSerializable;
