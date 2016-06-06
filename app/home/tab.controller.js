export default class TabController{
    constructor($scope,$stateParams,$firebaseObject,toDoService){
        //this.toDos= [];
        this.user = $stateParams.user;
        this.toDos = toDoService.getAll();
        this.toDoService = toDoService;
        this.editToDo = null;
        console.log(this.tuDos);
    }
    
    addToDo(){
        this.toDoService.add({
            value:{
             user:this.user,
             title:this.userText,
             completed:false
            }
         });
         /*
        this.toDos.push({
            value:{
                user:this.user,
                title:this.userText,
                completed:false
            },
            editing:false
        });
        */
    }
    
    onChangeStatus(status){
        this.statusFilter = (status === 'active') ?
  				{ completed: false } : (status === 'completed') ?
  				{ completed: true } : {};
    }
    
    editToDo(toDo){
        this.editingToDo=toDo;
    }
    
    stopEditing(toDo){
        this.editingToDo=null;
        this.toDoService.edit(toDo);
    }
    
    removeToDo(toDo){
        this.toDoService.remove(toDo);
    }
    
    markAll(isChecked){
        for(var i=0;i<this.todos.length;i++){
            if(this.todos[i].user == this.user){
                this.todos[i].completed = isChecked;
            }
        }
    }
    
    onUser(){
        this.selectedTab = 'user';
    }
    
    onAll(){
        this.selectedTab = 'all';
    }
}