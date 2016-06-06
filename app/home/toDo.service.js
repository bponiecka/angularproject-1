/*global Firebase */
export default class toDoService {
    constructor($firebaseArray)
    {
        this.firebaseArray = $firebaseArray;
        this.ref = new Firebase("https://angular-vavelsky.firebaseio.com/");
        this.items = $firebaseArray(this.ref); 
    }
    
    getAll(){
        return this.items;
    }
    
    add(value){
        console.log(value);
        this.items.$add({
           'user': value.user,
           'title': value.title,
           'completed': value.completed
        }); 
    }
    
    edit(value){
        console.log("editsave");
        this.items.$save(value);
        console.log("saved");
    }
    
    remove(ref){
        this.items.$remove(ref);
    }
};