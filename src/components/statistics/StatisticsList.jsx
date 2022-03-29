import propTypes from "prop-types"
import Statistics from "./Statistics"
import css from "./StatisticsList.module.css"
import generateColor from "../generateColor"


export default function StatisticsList({ stats, title }) {
    return ( <section className={css.list}>
      {title !== '' && <h2 className="title">{title}</h2>}
        <ul className={css.statList}>
            {stats.map(stat => <li key={stat.id} className={css.item} style={{ backgroundColor: generateColor()}}>
            <Statistics
                percentage={stat.percentage}
                label={stat.label}/>
</li>)}
        </ul>
        </section>)
}

StatisticsList.propTypes = {
    stats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
    }))
}