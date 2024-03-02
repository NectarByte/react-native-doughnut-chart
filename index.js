import { Text } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

export default function DoughnutChart({
    percentage = 60,
    showPercentage = true,
    size = 200,
    fontColor = 'blue',
    areaBg = 'grey',
    strokeAreaBg = 'pink'
}) {

    const radius = size / 4;
    const strokeWidth = size / 20;
    const center = size / 2;

    // Calculate stroked area
    const calculateDashArray = () => {
        const circumference = 2 * Math.PI * radius;
        const strokeDasharrayValue = ((100 - percentage) / 100) * circumference;
        return `${strokeDasharrayValue} ${circumference}`;
    };

    // Calculate fontSize dynamically
    const fontSize = (size * 0.08);

    // Calculate position dynamically based on the size
    const textPosition = {
        top: center - fontSize / 1.5,
        left: center - (fontSize / 1),
    };

    return (
        <Svg height={size} width={size}>
            <G>
                {/* Full Circle */}
                <Circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke={areaBg}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                {/* Colored Portion */}
                <Circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke={strokeAreaBg}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={calculateDashArray()}
                />
            </G>
            {showPercentage ?
                <Text style={{ textAlign: 'center', position: 'absolute', color: 'blue', fontSize: fontSize, fontColor: fontColor, ...textPosition }}>
                    {`${percentage}%`}
                </Text>
                :
                null
            }
        </Svg>
    );
};
