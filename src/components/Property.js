import Realm from 'realm';

class Property extends Realm.Object {}
Property.schema = {
    name: 'Property',
    properties: {
     bathroom_number: 'string',
     bedroom_number: 'string',
     title: 'string',
     summary: 'string',
     price: 'string',
     img_url: 'string',
     thumb_url:'string'
   },
};

export default new Realm({schema: [Property]});
