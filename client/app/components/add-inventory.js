import Ember from 'ember';

export default Ember.Component.extend({
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
  total:0,
  quanity:0,
  totalObserver:Ember.observer('quanity','price',function(){
    var quanity = this.get('quanity');
    var price = this.get('price');
    this.set('total',quanity*price);
  }),
  writersOptions:[],
  illustratorOptions:[],
  tagOptions:[],
  bindingOberserver:Ember.observer('bindingType','bindingChoice',function(){
    if(this.bindingChoice!=null){
      this.set('bindingType',this.bindingChoice.name);
    }
  }),
  materialObserver:Ember.observer('materialType','materialChoice',function(){
    if(this.materialChoice!=null){
      this.set('materialType',this.materialChoice.name);
    }
  }),
  gameObserver:Ember.observer('gameType','gameChoice',function(){
    if(this.gameChoice!=null){
      this.set('gameType',this.gameChoice.name);
    }
  }),
  figureObserver:Ember.observer('figureType','figureChoice', function(){
    var item = this.get('item');

    if(this.figureChoice!=null){
      this.set('figureType',this.figureChoice.name);
    }
  }),
  sizeObserver:Ember.observer('size','sizeChoice',function(){
    var item = this.get('item');

    if(this.sizeChoice!=null){
      this.set('size',this.sizeChoice.name);
    }

  }),
  genderObserver:Ember.observer('gender','genderChoice',function(){
    var item = this.get('item');

    if(this.genderChoice!=null){
      this.set('gender',this.genderChoice.name);
    }
  }),
  typeObserver:Ember.observer('type',function(){
    var item=this.get('item');
    if(this.type.name==='comic' || this.type.name==='trade'){
      this.set('book',true);
    }else{
      this.set('book',false);
    }
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
        console.log(item.get('typeName'));
        break;
      default:break;
    }
  }),
  actions:{
    alertToNoItem(){
      this.sendAction('alertToNoItem');
    },
    addItem(){
      var values = {
        total:this.get('total'),
        quanity:this.get('quanity')
    }
    this.set('total',0);
    this.set('quanity',null);
      this.sendAction('addItem',values);
    },
    createNewItem(){
      this.sendAction('createNewItem');
    }
  }
});
