import { useState } from "react";    //This form will display the data being entered on the console

function MyForm() {
    const [name, setName] = useState({    //Initialization of objects is done here, ie username and age.
        username: "",
        age: ""
    }
    );     

    function handleSubmit(event) {
        event.preventDefault();       //This line prevents from refreshing the page
        console.log("Saved: ", name);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Your Name: </label>
            <input type="text" value={name.username} 
            onChange={(event) =>                                    //...name is called spread which takes the old value ie "" from above and updates it with the new value for which setName is used.
                setName({...name, username: event.target.value})}   //setName to display the new value. event.target.value is simply what the user have typed
            />
            <br></br>
            <label>Enter Your Age: </label>
            <input type="text" value={name.age} 
            onChange={(event) => 
                setName({...name, age: event.target.value})}   //setName to display the new value. event.target.value is simply what the user have typed
            />
            <button type="submit">Submit</button>
        </form>
    );
}
export default MyForm;