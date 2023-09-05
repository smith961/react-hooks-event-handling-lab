// Code Keypad Component Here

function Keypad (){
    function handlChange(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={handlChange} />
        </div>
    )
}

export default Keypad;