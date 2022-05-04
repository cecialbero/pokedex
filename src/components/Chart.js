import { ProgressBar, ProgressBarBar, ProgressBarValue, ProgressBarLabel } from '../styled-components/ProgressBar'

const Chart = ({value, label}) => {
    return (
        <ProgressBar>
            <ProgressBarLabel>{label}</ProgressBarLabel>
            <ProgressBarBar>
                <ProgressBarValue style={{width: `${value * 100 / 110}%`}}>{value}</ProgressBarValue>
            </ProgressBarBar>
        </ProgressBar>
    )
}

export default Chart