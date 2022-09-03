export class Todo {

    //put properties inside the constructor. these properies are on the class
    //constructor receives thease as parameters
    constructor(
        public text: string,
        //todos will be false (not done) when created
        public completed: boolean = false
    ) {}

}