import _ from "lodash";
import serializeToPlainObject from "../serializeToPlainObject";
import AddressImplementsISerializable from "./ExampleModels/AddressImplementsISerializable";
import AddressExtendingSerializable from "./ExampleModels/AddressExtendingSerializable";
import MemberExtendingSerializable from "./ExampleModels/MemberExtendingSerializable";
import IAddress from "./ExampleModels/IAddress";
import IMember from "./ExampleModels/IMember";
import MemberImplementsISerializable from "./ExampleModels/MemberImplementsISerializable";
import MemberOverrideSerializable from "./ExampleModels/MemberOverrideSerializable";
import AddressOverrideSerializable from "./ExampleModels/AddressOverrideSerializable";
import Address from "./ExampleModels/Address";
import ISerializable from "../ISerializable";

describe("serializeToPlainObject", (): void => {
  describe("with ISerializable", (): void => {
    test("simple", (): void => {
      const prefecture = "東京都";
      const city = "世田谷区";
      const address = new AddressImplementsISerializable(prefecture, city);

      const obj: IAddress = serializeToPlainObject(address);

      expect(_.isPlainObject(address)).toBeFalsy();
      expect(_.isPlainObject(obj)).toBeTruthy();
      expect(obj).toEqual({ prefecture, city });
    });
    test("multiple layer", (): void => {
      const name = "szk rkr";
      const prefecture = "東京都";
      const city = "世田谷区";
      const address = new AddressImplementsISerializable(prefecture, city);
      const member = new MemberImplementsISerializable(name, address);

      const obj: IMember = serializeToPlainObject(member);

      expect(_.isPlainObject(member)).toBeFalsy();
      expect(_.isPlainObject(obj)).toBeTruthy();
      expect(obj).toEqual({ name, address: { prefecture, city } });
    });
  });
  describe("with Serializable<T>", (): void => {
    test("simple", (): void => {
      const prefecture = "東京都";
      const city = "世田谷区";
      const address = new AddressExtendingSerializable(prefecture, city);

      const obj: IAddress = serializeToPlainObject(address);

      expect(_.isPlainObject(address)).toBeFalsy();
      expect(_.isPlainObject(obj)).toBeTruthy();
      expect(obj).toEqual({ prefecture, city });
    });
    test("multiple layer", (): void => {
      const name = "szk rkr";
      const prefecture = "東京都";
      const city = "世田谷区";
      const address = new AddressExtendingSerializable(prefecture, city);
      const member = new MemberExtendingSerializable(name, address);

      const obj: IMember = serializeToPlainObject(member);

      expect(_.isPlainObject(member)).toBeFalsy();
      expect(_.isPlainObject(obj)).toBeTruthy();
      expect(obj).toEqual({ name, address: { prefecture, city } });
    });
  });
  describe("with Serializable<T> overrides toObject", (): void => {
    test("simple", (): void => {
      const prefecture = "東京都";
      const city = "世田谷区";
      const address = new AddressOverrideSerializable(prefecture, city);

      const obj: IAddress = serializeToPlainObject(address);

      expect(_.isPlainObject(address)).toBeFalsy();
      expect(_.isPlainObject(obj)).toBeTruthy();
      expect(obj).toEqual({ prefecture, city });
    });
    test("multiple layer", (): void => {
      const name = "szk rkr";
      const prefecture = "東京都";
      const city = "世田谷区";
      const address = new AddressOverrideSerializable(prefecture, city);
      const member = new MemberOverrideSerializable(name, address);

      const obj: IMember = serializeToPlainObject(member);

      expect(_.isPlainObject(member)).toBeFalsy();
      expect(_.isPlainObject(obj)).toBeTruthy();
      expect(obj).toEqual({ name, address: { prefecture, city } });
    });
  });
  describe("without Serializable", (): void => {
    test("simple", (): void => {
      const prefecture = "東京都";
      const city = "世田谷区";
      const address = new Address(prefecture, city);

      expect(() => {
        serializeToPlainObject(address as IAddress & ISerializable<IAddress>);
      }).toThrowError('Please implements ISerializable interface (or extend Serializable class).');
    });
  });
});
