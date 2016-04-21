import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  itemTypes:[{name:'comic'},{name:'figure'},{name:'game'},{name:'trade'},{name:'apparel'}],
  type:null,
  genderTypes:[{name:'male'},{name:'female'},{name:'unisex'}],
  figureChoices:[{name:'game'},{name:'figure'},{name:'collectable'},{name:'action'}],
  //figureChoice:null,
  gameChoices:[{name:'card'},{name:'dice'},{name:'board'},{name:'role playing'}],
  //gameChoice:null,
  materialChoices:[{name:'plush'},{name:'vinyl'},{name:'plastic'},{name:'die-cast'},{name:'metal'}],
  //materialChoice:null,
  bindingChoices:[{name:'hardback'},{name:'paperback'}],

  total:0,
  quanity:0,
  issue_num:null,
  size:null,
  detail_id:null,
  newComic:false,
  fwriter:null,
  lwriter:null,
  fillustrat:null,
  lillustrat:null,
  newWriter:false,
  newIllustrator:false,
  collectedComics:[],
  vendor_id:null,
  brand:null,
  newVendor:Ember.computed('vendor',function(){
    if(this.get('vendor')){
      if(this.get('vendor').content!=null){
        return false;
      }else {
        return true;
      }
    }
  }),
  newBrand:Ember.computed('brand',function(){
    if(this.get('brand')){
      if(this.get('brand').content!=null){
        return false;
      }else {
        return true;
      }
    }
  }),
  totalObserver:Ember.observer('quanity','price',function(){
    var quanity = this.get('quanity');
    var price = this.get('price');
    this.set('total',quanity*price);
  }),
  writersOptions:[],
  illustratorOptions:[],
  tagOptions:[],

  sizeObserver:Ember.observer('size','sizeChoice',function(){
    var item = this.get('item');

    if(this.sizeChoice!=null){
      this.set('size',this.sizeChoice.name);
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
    setCollected(event){
      const comic = Ember.$(event.target).val();
      if(this.get('collectedComics').contains(comic)){
        this.get('collectedComics').removeObject(comic);
      }else {
        this.get('collectedComics').pushObject(comic);
      }
      console.log(this.get('collectedComics'));
    },
    setVendor(value){
      console.log(value);
      this.set('vendor_id',value);
      console.log(this.get('vendor_id'));
    },
    setBrand(value){
      this.set('brand',value);
    },
    setTags(event){
      const tag = Ember.$(event.target).val();
      console.log(tag);
      this.set('tagOptions',tag||[]);
    },
    alertToNoItem(){
      this.sendAction('alertToNoItem');
    },
    setIssueNum(value){
      if(value==='other'){
        console.log(value);
        this.set('newComic',true);
      }else{
        console.log(value);
        this.set('detail_id',value);
      }
    },
    setSize(value){
      console.log(value);
      this.set('detail_id',value);
    },
    setWriters(event){
      const writer = Ember.$(event.target).val();
      if(writer.get('firstObject') === "other"){
        this.sendAction('newWriter');
      } else
      this.set('writersOptions',writer||[]);
    },
    setIllustrators(event){
      const illustrator = Ember.$(event.target).val();
      console.log(illustrator);
      if(illustrator.get('firstObject')==="other"){
        this.sendAction('newIllustrator');
      } else
      this.set('illustratorOptions',illustrator||[]);
    },
    addItem(){
      var values = {
        total:this.get('total'),
        quanity:this.get('quanity'),
        issue_num:this.get('issue_num'),
        size:this.get('size'),
        newComic:this.get('newComic'),
        detail_id:this.get('detail_id'),
        writers:this.get('writersOptions'),
        illustrators:this.get('illustratorOptions'),
        tags:this.get('tagOptions'),
        comics:this.get('collectedComics'),
        vendor:this.get('vendor_id'),
        brand:this.get('brand')
      };
    this.set('total',0);
    this.set('quanity',null);
      this.sendAction('addItem',values);
    },
    createNewItem(){
      this.sendAction('createNewItem');
    },
    deleteItem(value){
      console.log(value);
      this.sendAction('deleteItem',value);
    },
    setFigure(value){
      console.log(value);
      this.set('figureChoice',value);
    },
    setMaterial(value){
      console.log(value);
      this.set('materialChoice',value);
    },
    setApparelType(value){
      this.set('apparelType',value);
    },
    setGame(value){
      this.set('gameType',value);
    },
    setBinding(value){
      this.set('bindingType',value);
    },
    setGender(value){
      this.set('gender',value);
    }
  }
});
