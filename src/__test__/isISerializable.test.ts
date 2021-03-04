import isISerializable from "../isISerializable";
import Serializable from "../Serializable";
import AddressExtendingSerializable from "./ExampleModels/AddressExtendingSerializable";
import AddressImplementsISerializable from "./ExampleModels/AddressImplementsISerializable";

describe("isISerializable", (): void => {
  describe("true case", (): void => {
    test("Serializable instance", (): void => {
      const instance = new Serializable();
      expect(isISerializable(instance)).toBeTruthy();
    });
    test("Class extends Serializable", (): void => {
      const instance = new AddressExtendingSerializable("", "");
      expect(isISerializable(instance)).toBeTruthy();
    });
    test("Class implements ISerializable", (): void => {
      const instance = new AddressImplementsISerializable("", "");
      expect(isISerializable(instance)).toBeTruthy();
    });
    test("Dummy Object has toObject()", (): void => {
      const dummuy = { toObject: () => "_" };
      expect(isISerializable(dummuy)).toBeTruthy();
    });
  });
  describe("false case", (): void => {
    test("string", (): void => {
      expect(isISerializable("string")).toBeFalsy();
    });
    test("booelan", (): void => {
      expect(isISerializable(true)).toBeFalsy();
    });
    test("null", (): void => {
      expect(isISerializable(null)).toBeFalsy();
    });
    test("undefined", (): void => {
      expect(isISerializable(undefined)).toBeFalsy();
    });
    test("array", (): void => {
      expect(isISerializable([])).toBeFalsy();
    });
    test("typed array", (): void => {
      expect(isISerializable(new Uint8Array())).toBeFalsy();
    });
    test("big int", (): void => {
      const x = 2n ** 53n;
      expect(isISerializable(x)).toBeFalsy();
    });
    test("symbol", (): void => {
      expect(isISerializable(Symbol.iterator)).toBeFalsy();
    });
    test("plain object without toObject property", (): void => {
      const obj = {};
      expect(isISerializable(obj)).toBeFalsy();
    });
    test("map", (): void => {
      expect(isISerializable(new Map())).toBeFalsy();
    });
    test("weak map", (): void => {
      expect(isISerializable(new WeakMap())).toBeFalsy();
    });
    test("set", (): void => {
      expect(isISerializable(new Set())).toBeFalsy();
    });
    test("weak set", (): void => {
      expect(isISerializable(new WeakSet())).toBeFalsy();
    });
    test("Nan", (): void => {
      expect(isISerializable(NaN)).toBeFalsy();
      expect(isISerializable(new Number(NaN))).toBeFalsy();
    });
  });
});
