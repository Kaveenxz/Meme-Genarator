export default function Item(props) {

    return (
        <div>
            <div>
                <p>{props.name}</p>
                <button onClick={props.click}>Buy</button>
            </div>
        </div>
    )
}