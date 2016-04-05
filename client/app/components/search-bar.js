import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    setType(value){
      this.set('type',value);
    },
    setTag(value){
      this.set('tag',value);
    },
    setApparelType(value){
      this.set('apparelType',value);
    },
    setApparelSize(value){
      this.set('size',value);
    },
    setFigureType(value){
      this.set('figureType',value);
    },
    setMaterialType(value){
      this.set('materialType',value);
    },
    setGameType(value){
      this.set('gameType',value);
    },
    clearSearch(){
      this.sendAction('clearSearch');
    },
  },
});
