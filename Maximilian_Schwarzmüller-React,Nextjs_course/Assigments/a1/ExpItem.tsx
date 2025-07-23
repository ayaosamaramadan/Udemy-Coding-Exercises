const ExpItem = ({ title, amount, date }) => {
    return ( <>
    <h2>{title}</h2>
    <div>
        <span>{amount}</span>
        <span>{date.toISOString()}</span>
    </div>
    </> );
}
 
export default ExpItem;