import TransactionData from "./TransactionsData";
import css from "./TransactionHistory.module.css";


export default function TransactionHistory({items}) {
    return (<section className={css.transactions}>
        <table className={css.transTable}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
            </thead>
            <tbody>
                {items.map(item => <tr key={item.id}>
                    <TransactionData
                        item={item}
                    />
      
                </tr>)}
                </tbody>
        </table>
        </section>
    )
}
