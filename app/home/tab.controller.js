export default class TabController{
    constructor($scope,$stateParams,$firebaseObject,toDoService){
        //this.toDos= [];
        this.user = $stateParams.user;
        console.log(this.user);
        this.toDos = toDoService.getAll();
        console.log(this.toDos);
        this.toDoService = toDoService;
        this.editToDo = null;
        console.log(this.toDos);
        this.userFilter = {};
    }
    
    addToDo(){
        console.log("jestem w add");
        this.toDoService.add({
            
             user:this.user,
             title:this.userText,
             completed:false
            
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
    
    onChangeTab(userTab){
        if(userTab == 'all'){
            this.userFilter = {};
        } else {
            this.userFilter = {user: this.user};
        }
    }
    
    editToDo1(toDo){
        console.log("editToDo");
        this.editToDo=toDo;
    }
    
    stopEditing(toDo){
        this.editToDo=null;
        this.toDoService.edit(toDo);
        console.log(toDo);
    }
    
    removeToDo(toDo){
        this.toDoService.remove(toDo);
    }
    
    markAll(isChecked){
        for(var i=0;i<this.toDos.length;i++){
            if(this.canProcessElement(this.toDos[i])){
                this.toDos[i].completed = isChecked;
                this.stopEditing(this.toDos[i]);
            }
        }
        
    }
    
    canProcessElement(toDo){
        return toDo.user == this.user;
    }
    
    onUser(){
        this.selectedTab = 'user';
    }
    
    onAll(){
        this.selectedTab = 'all';
    }
    
    clearAllCompleted(){
        for(var i=0;i<this.toDos.length;i++){
            if(this.canProcessElement(this.toDos[i]) && this.toDos[i].completed == true){
                this.removeToDo(this.toDos[i]);
            }
        }
    }
}