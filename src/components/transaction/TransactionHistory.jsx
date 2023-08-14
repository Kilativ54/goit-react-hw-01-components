import css from "./TransactionHistory.module.css";
import PropTypes from 'prop-types';
export const TransactionHistory = ({items})=>(
    <table className={css.transactionHistoryTable}>
    <thead className={css.hederRow}>
      <tr className={css.valuesRow}>
        <th className={css.columnHeader}>Type</th>
        <th className={css.columnHeader}>Amount</th>
        <th className={css.columnHeader}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id} className={css.valuesRow}>
          <td className={css.itemData}>{item.type}</td>
          <td className={css.itemData}>{item.amount}</td>
          <td className={css.itemData}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.protoType = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.number.isRequired,
      })
    ).isRequired,
  }
