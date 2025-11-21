function handleClick(){
    console.log("Heyy!");
}
function handleMouseHover(){
    console.log("Bye!");
}
function handleDoubleClick(){
    console.log("You are back again!")
}
export default function Button() {
    return (
        <div onClick={handleClick}>               {/* Here onlick is the event listener and we have created a function above and on clicking this button or text this onclick event listener will perform its task */}
            <button>Click me!</button>
            <p onMouseOver={handleMouseHover}>This is a paragraph!</p>   {/* Here onMouseOver is the hover event when we hover the text the event activates and the output can be seen in the inspect console window */}
            <button onDoubleClick={handleDoubleClick}>Double click me!</button>   {/* Here doubleclick eventlistener is used */}
        </div>
    );

}