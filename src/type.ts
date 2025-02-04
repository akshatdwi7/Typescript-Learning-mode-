type draggable={
    drag: ()=> void
}
type reziable = {
    resize:(length : number , width : number)=> void
}

type UiWId = draggable & reziable; 
let textbox: UiWId = {
    drag :() => {},
    resize:()=> {}
}