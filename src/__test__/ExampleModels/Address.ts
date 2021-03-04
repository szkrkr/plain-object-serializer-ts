import IAddress from "./IAddress";

class Address implements IAddress {
  prefecture: string;
  city: string;

  constructor(prefecture: string, city: string) {
    this.prefecture = prefecture;
    this.city = city;
  }
}

export default Address;
