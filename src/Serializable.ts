import _ from "lodash";
import ISerializable from "./ISerializable";
import isISerializable from "./isISerializable";

class Serializable<T> implements ISerializable<T> {
  toObject = (): T => {
    const obj = _.omitBy(this, (item) => {
      return _.isFunction(item);
    });
    const ret = _.mapValues(obj, <U>(value: U) => {
      if(isISerializable(value)){
        return value.toObject();
      }
      return value;
    })
    return _.toPlainObject(ret) as T;
  }
}

export default Serializable;
