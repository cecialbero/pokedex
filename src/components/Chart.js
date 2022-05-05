import { ProgressBar, ProgressBarLabel } from '../styled-components/ProgressBar'

const Chart = ({value, label}) => {
    return (
        <ProgressBar>
            <ProgressBarLabel>{label}</ProgressBarLabel>
            <progress value={value} max="110"><span>{value}</span></progress>
        </ProgressBar>
    )
}

export default Chart