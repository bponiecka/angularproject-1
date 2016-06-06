export default class TabController{
    constructor($scope,$stateParams){
        this.toDos= [];
        this.user = $stateParams.user;
    }
    
    addToDo(){
        this.toDos.push({
            value:{
                user:this.user,
                title:this.userText,
                completed:false
            },
            editing:false
        });
    }
    
    onChangeStatus(status){
        this.statusFilter = (status === 'active') ?
  				{ value:{completed: false }} : (status === 'completed') ?
  				{ value:{completed: true }} : {};
    }
    
    editToDo(toDo){
        toDo.editing=!toDo.editing;
        this.originalToDo=toDo;
    }
    
    stopEditing(toDo){
        toDo.editing=false;
        console.log(toDo.editing);
    }
    
    removeToDo(toDo){
        var index = this.toDos.indexOf(toDo);
        this.toDos.splice(index,1);
    }
    
    onUser(){
        this.selectedTab = 'user';
    }
    
    onAll(){
        this.selectedTab = 'all';
    }
}