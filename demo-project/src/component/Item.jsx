import { useContext } from "react"
import BaseContext from "../context/BaseContext"

export default function Item(props) {

    const clickMe = useContext(BaseContext);

    return (
        <div>
            <div>
                <p>{props.name}</p>
                <button onClick={clickMe}>Buy</button>
            </div>
        </div>
    )
}