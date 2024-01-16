// Code EyesOnMe Component Here
function EyesOnMe() {
    function handleClick() {
    }
    function handleFocus() {
        console.log ('Good!')
    }
    function handleBlur() {
        console.log ('Hey! Eyes on me!')
    }
    return(
        <button onClick={handleClick} onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe