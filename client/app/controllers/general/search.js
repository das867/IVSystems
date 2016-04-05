import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams:['name','apparelType','materialType','gameType','figureType','size','type'],
  name:null,
  type:null,
  tag:null,
  apparelType:null,
  materialType:null,
  gameType:null,
  figureType:null,
  size:null,
  tagChoices:Ember.computed(function(){
    return this.store.findAll('tag');
  }),

  filteredItems:Ember.computed('name','type','tag','model','apparelType','materialType','gameType','figureType','size',function(){
    var name = this.get('name');
    var size = this.get('size');
    var type = this.get('type');
    var items = this.get('model').toArray();
    var tag = this.get('tag');
    var materialType = this.get('materialType');
    var gameType = this.get('gameType');
    var figureType = this.get('figureType');
    var apparelType = this.get('apparelType');
    if(name){
      items = items.filterBy('name',name);
    }
    if(type){
      if(type!= null){
        items = items.filterBy('typeName',type);
      }
    }
    if(size){
      if(size!= null){
        items = items.filterBy('size',size);
      }
    }
    if(apparelType){
      if(apparelType!=null){
        items = items.filterBy('apparelType',apparelType);
      }
    }
    if(gameType){
      if(gameType!=null){
        items = items.filterBy('gameType',gameType);
      }
    }
    if(materialType){
      if(materialType!=null){
        items = items.filterBy('materialType',materialType);
      }
    }
    if(figureType){
      if(figureType!=null){
        items = items.filterBy('figureType',figureType);
      }
    }
    if(tag){
      if(tag != null){
        var filterPromise = Ember.RSVP.filter(items,item =>{
          return item.get('tags').then(itemtag => {
            return itemtag.isAny('name', tag);
          });
        });
        return DS.PromiseArray.create({
          promise: filterPromise
        });
      }
    }
    return items;
  }),

});
