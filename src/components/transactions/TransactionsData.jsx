import propTypes from "prop-types";

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

TransactionData.propTypes = {
    type: propTypes.string,
    amount: propTypes.number,
    currency: propTypes.string,
}