export default class toDoController{
    constructor($scope,$stateParams,$firebaseObject,toDoService){
        //this.toDos= [];
        this.user = $stateParams.user;
        console.log(this.user);
        this.toDos = toDoService.getAll();
        console.log(this.toDos);
        this.isMarked = false;
        console.log("loaded");
        console.log(this.toDos.$loaded);
        this.toDos.$loaded().then(this.setStatictics.bind(this));
        this.toDos.$watch(this.setStatictics.bind(this));
        console.log(this.toDos);
        this.toDoService = toDoService;
        this.editToDo = null;
        console.log(this.toDos);
        this.userAll = 0;
        this.userCompleted = 0;
        this.userIncompleted = 0;
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
    
    markAll(){
        this.isMarked = !this.isMarked;
        for(var i=0;i<this.toDos.length;i++){
            if(this.canProcessElement(this.toDos[i])){
                console.log(this.toDos[i]);
                this.toDos[i].completed = this.isMarked;
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
                this.stopEditing(this.toDos[i]);
            }
        }
    }
    
    setStatictics(){
        this.userAll = 0;
        this.userCompleted = 0;

        for(var i=0;i<this.toDos.length;i++){
            if(this.user == this.toDos[i].user){
                this.userAll = this.userAll + 1;
                if(this.toDos[i].completed) {
                    this.userCompleted = this.userCompleted + 1;
                }
            }
            this.userIncompleted = this.userAll - this.userCompleted;
        }
    }
}