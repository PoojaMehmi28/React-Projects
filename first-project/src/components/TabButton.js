//Component Composition

// export default function TabButton(name){
//     return (
//         <button>{name.children}</button>
//     );
// }

// //On click on tabs
// export default function TabButton(name){
//     function HandleClick(){
//         alert('working');
//     }
//     return (
//         <button onClick={HandleClick}>{name.children}</button>
//     );
// }

//On click on tabs
export default function TabButton({children, onSelect}){
    return (
        <button onClick={onSelect}>{children}</button>
    );
}