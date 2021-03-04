import serializeToPlainObject from 'plain-object-serializer-ts/dist/serializeToPlainObject';
import Address from './Models/Address';
import Member from './Models/Member';

const address = new Address("東京都", "世田谷区");
const member = new Member("姓 名", address);

console.log(serializeToPlainObject(member));

