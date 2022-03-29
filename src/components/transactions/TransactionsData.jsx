

export default function TransactionData({ item }) 
{
    const { type, amount, currency } = item
    return (<>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
        </>
    )
}