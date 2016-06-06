export default class toDoService {
    constructor($firebaseArray)
    {
        this.firebaseArray = $firebaseArray;
        this.ref = new Firebase("https://angular-vavelsky.firebaseio.com/");
        this.ref.push({
           'user': 'testuser1',
           'title':'testtitle1',
           'completed':'false'
        });
        this.elementref = this.ref.push({
           'user': 'testuser2',
           'title':'testtitle2',
           'completed':'false'
        }); 
    }
    
    getAll(){
        return this.items;
    }
    
    add(value){
        this.items.$add({
           'user': value.user,
           'title': value.title,
           'completed': value.completed
        }); 
    }
    
    edit(value){
        this.items.$save(value);
    }
    
    remove(value){
        this.items.$remove(ref);
    }
};