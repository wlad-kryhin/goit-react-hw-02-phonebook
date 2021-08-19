export default function Filter({value,change}){
    return(
        <label>
            Find contacts by name
            <input type="text" value={value} onChange={change} />
        </label>
    )
}