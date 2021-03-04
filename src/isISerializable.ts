/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import ISerializable from "./ISerializable";

const isISerializable = (obj: any): obj is ISerializable<unknown> => {
  if(obj !== Object(obj)){
    return false;
  }
  if(!('toObject' in obj)){
    return false;
  }
  return true;
}

export default isISerializable;
