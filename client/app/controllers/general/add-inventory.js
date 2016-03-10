import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['id'],
  id: null,
  itemTypes:[{name:'comic'},{name:'figure'},{name:'game'},{name:'trade'},{name:'apparel'}],
  type:null,
  genderTypes:[{name:'male'},{name:'female'},{name:'unisex'}],
  genderChoice:null,
  sizeChoices:[{name:'XS'},{name:'S'},{name:'M'},{name:'L'},{name:'XL'},{name:'XXL'}],
  sizeChoice:null,
  figureChoices:[{name:'game'},{name:'figure'},{name:'collectable'},{name:'action'}],
  figureChoice:null,
  gameChoices:[{name:'card'},{name:'dice'},{name:'board'},{name:'role playing'}],
  gameChoice:null,
  materialChoices:[{name:'plush'},{name:'vinyl'},{name:'plastic'},{name:'die-cast'},{name:'metal'}],
  materialChoice:null,
  bindingChoices:[{name:'hardback'},{name:'paperback'}],
  bindingChoice:null,
  bindingOberserver:Ember.observer('bindingType','bindingChoice',function(){
    var item = this.get('item');

    if(item.bindingChoice!=null){
      item.set('bindingType',item.bindingChoice.name);
    }
  }),
  materialObserver:Ember.observer('materialType','materialChoice',function(){
    var item = this.get('item');

    if(item.materialChoice!=null){
      item.set('materialType',item.materialChoice.name);
    }
  }),
  gameObserver:Ember.observer('gameType','gameChoice',function(){
    var item = this.get('item');

    if(item.gameChoice!=null){
      item.set('gameType',item.gameChoice.name);
    }
  }),
  figureObserver:Ember.observer('figureType','figureChoice', function(){
    var item = this.get('item');

    if(item.figureChoice!=null){
      item.set('figureType',item.figureChoice.name);
    }
  }),
  sizeObserver:Ember.observer('size','sizeChoice',function(){
    var item = this.get('item');

    if(item.sizeChoice!=null){
      item.set('size',item.sizeChoice.name);
    }

  }),
  genderObserver:Ember.observer('gender','genderChoice',function(){
    var item = this.get('item');

    if(item.genderChoice!=null){
      item.set('gender',item.genderChoice.name);
    }
  }),
  typeObserver:Ember.observer('type',function(){
    var item = this.get('item');
    switch (this.type.name) {
      case 'comic': item.set('trade',false);item.set('figure',false);
        item.set('game',false); item.set('apparel',false);
        item.set('comic',true); item.set('typeName','comic');
        break;
      case 'trade':  item.set('trade',true);item.set('figure',false);
        item.set('game',false); item.set('apparel',false);
        item.set('comic',false); item.set('typeName','trade');
        break;
      case 'figure': item.set('trade',false);item.set('figure',true);
        item.set('game',false); item.set('apparel',false);
        item.set('comic',false); item.set('typeName','figure');
        break;
      case 'game':  item.set('trade',false);item.set('figure',false);
        item.set('game',true); item.set('apparel',false);
        item.set('comic',false); item.set('typeName','game');
        break;
      case 'apparel':  item.set('trade',false);item.set('figure',false);
        item.set('game',false); item.set('apparel',true);
        item.set('comic',false);item.set('typeName','apparel');
        break;
      default:break;

    }
  }),
  item:Ember.computed('model',function(){
    return this.get('model');
  }),
  actions:{
    alertToNoItem(){
      if(this.get('item')===null){
        $('.no-item-found').removeClass('hidden');
      }else{
        $('.no-item-found').addClass('hidden');
      }
      console.log(this.get('item')===null);
    }
  }
});
