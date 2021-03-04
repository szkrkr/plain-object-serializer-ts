import Serializable from "../Serializable";
import isSerializable from "../isISerializable";

describe("Serializable", (): void => {
  describe("constructor", (): void => {
    test("constructor", (): void => {
      const instance = new Serializable();

      expect(instance).toBeInstanceOf(Serializable);
      expect("toObject" in instance).toBeTruthy();
      expect(isSerializable(instance)).toBeTruthy();
    });
  });
  describe("toObject", (): void => {
    test("toObject", (): void => {
      const instance = new Serializable();

      expect(instance.toObject()).toEqual({});
    });
  });
});
