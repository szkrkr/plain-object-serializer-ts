interface ISerializable<T> {
  toObject: () => T;
}

export default ISerializable;
