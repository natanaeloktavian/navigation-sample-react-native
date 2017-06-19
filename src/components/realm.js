//'use strict';
import Realm from 'realm';

//class Property extends Realm.Object {}
const PropertySchema = {
    name: 'Property',
    primaryKey: 'title',
    properties: {
     bathroom_number: {type : 'string'},
     bedroom_number: {type : 'string'},
     title: {type : 'string'},
     summary: {type : 'string'},
     price: {type : 'string'},
     img_url: {type : 'string'},
     thumb_url:{type : 'string'},
     property_city:{type : 'string'}
   }
};

let realm = new Realm({schema: [PropertySchema]});
//export default new Realm({schema: [PropertySchema]});
export default realm;
