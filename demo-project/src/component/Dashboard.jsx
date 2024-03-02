import Item from "./Item"
export default function Dashboard(props){
    const clickMe = props.click;
    return(
        <div>
            Dashboard
            <Item name="bun" click={clickMe}></Item>
            <Item name="Vite"></Item>
        </div>
    )
}