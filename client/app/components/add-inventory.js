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
    if(this.figureChoice!=null){
      this.set('figureType',this.figureChoice.name);
    }
  }),
  sizeObserver:Ember.observer('size','sizeChoice',function(){
    if(this.sizeChoice!=null){
      this.set('size',this.sizeChoice.name);
    }

  }),
  genderObserver:Ember.observer('gender','genderChoice',function(){
    if(this.genderChoice!=null){
      this.set('gender',this.genderChoice.name);
    }
  }),
  typeObserver:Ember.observer('type',function(){
    switch (this.type.name) {
      case 'comic': this.set('trade',false);this.set('figure',false);
        this.set('game',false); this.set('apparel',false);
        this.set('comic',true); this.set('typeName','comic');
        console.log(this.get('typeName'));
        break;
      case 'trade':  this.set('trade',true);this.set('figure',false);
        this.set('game',false); this.set('apparel',false);
        this.set('comic',false); this.set('typeName','trade');
        console.log(this.get('typeName'));
        break;
      case 'figure': this.set('trade',false);this.set('figure',true);
        this.set('game',false); this.set('apparel',false);
        this.set('comic',false); this.set('typeName','figure');
        console.log(this.get('typeName'));
        break;
      case 'game':  this.set('trade',false);this.set('figure',false);
        this.set('game',true); this.set('apparel',false);
        this.set('comic',false); this.set('typeName','game');
        console.log(this.get('typeName'));
        break;
      case 'apparel':  this.set('trade',false);this.set('figure',false);
        this.set('game',false); this.set('apparel',true);
        this.set('comic',false); this.set('typeName','apparel');
        console.log(this.get('typeName'));break;
      default:break;
    }
  }),
});
