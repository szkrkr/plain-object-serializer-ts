import ISerializable from "./ISerializable";
import isISerializable from "./isISerializable";

const serializeToPlainObject = <T>(serializableObject: ISerializable<T>): T => {
  if(!isISerializable(serializableObject)){
    throw new Error("Please implements ISerializable interface (or extend Serializable class). ")
  }
  return serializableObject.toObject();
};

export default serializeToPlainObject;
