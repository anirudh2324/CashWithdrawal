import './index.css'

const DenominationItems = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  const onUpdateBalance = () => {
    updateBalance(value)
  }
  return (
    <li className="denomination-item">
      <button
        type="button"
        onClick={onUpdateBalance}
        className="denomination-button"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItems
