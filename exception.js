





var student={
	firstname: "ravindra",
	lastname: "nishanth",
    getFullName:function(){
        console.log(this.firstname + this.lastname);
    }
    setFullName:function(){
    	try{
    		if((len(this.firstname)+len(this.lastname)) >= 3) throw "length greater than 3";
    		if(isNaN(firstname)) throw "a string";
    	}
        catch(err){
        	console.log(err);
        }

    }
}

student.getFullName();
student.setFullName();
    