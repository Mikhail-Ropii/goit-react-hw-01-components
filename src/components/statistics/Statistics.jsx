import propTypes from "prop-types";
import css from "./Statistics.module.css"

export default function Statistics({ label, percentage }) {
    return (<>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
      </>
    )
}

Statistics.propTypes = {
  label: propTypes.string,
  percentage: propTypes.number,
}