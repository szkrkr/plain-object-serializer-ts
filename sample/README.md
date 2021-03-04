# plain-object-serializer-ts-user
this is sample project.

# How to use
1. Extends Serializable Class (or implements ISerializable)
```ts
class Member extends Serializable<IMember> implements IMember {
  :
}
```
2. Call serializeToPlainObject with serializable instance.
```ts
const member = new Member("姓 名", address);

console.log(serializeToPlainObject(member));
```

# Troubleshooting
* When there is array of serializable instance, please override toObject function.
Ex)
```ts
class MyClass extends Serializable<IMyClass> implements IMyClass {
  items: (IItem & ISerializable<IItem>)[];

  toOBject = (): IMyClass => {
    return {
      items: this.items.map(i => i.toObject()),
    } as IMyClass;
  }
}
```