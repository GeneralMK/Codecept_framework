const {I}=inject()

class LoginPage{
    logInBtn= "Log In"
    username= "#mat-input-2"
    password= "#mat-input-3"
    logOnBtn= "Login"

    validateUser={
        class:{
            css:".mat-menu-trigger"
        },
        text: "Masixole Kondile"
    }
    errorMessage={
        class:{
            css:".et-bg-red .et-text-white"
        },
        text:'Invalid credentials provided' 
    }
    //methods
    fillLoginFields(user){
        I.click(this.logInBtn)
        I.wait(3)
        I.seeElement(this.username)
        I.seeElement(this.password)
        I.fillField(this.username, user.username)
        I.fillField(this.password, user.password)
        
    }
    logInToDashBoard(){
        I.click(this.logOnBtn)
       
    }
    invalidLogIn(){
        I.click(this.logOnBtn)
       
    }
   
}

module.exports= LoginPage;