export default class TabController{
    constructor($scope,$stateParams){
        this.toDos= [];
        this.user = $stateParams.user;
        this.userText ='';
    }
    
    addToDo(){
        this.toDos.push({
            user:this.user,
            title:this.userText,
            completed:false
        });
    }
    
    removeToDo(toDo){
        var index = this.toDos.indexOf(toDo);
 +      this.toDos.splice(index,1);
    }
    
    onUser(){
        this.selectedTab = 'user';
    }
    
    onAll(){
        this.selectedTab = 'all';
    }
}