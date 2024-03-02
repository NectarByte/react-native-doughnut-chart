# React Native Doughnut Chart

A customizable and animated React Native component for creating doughnut charts with percentage display. This lightweight and easy-to-use package allows you to integrate interactive and visually appealing doughnut charts into your React Native applications.

## Features

- **Customizable**: Easily adjust the size, colors, and percentage of the doughnut chart to match your application's design.
- **Animated**: Smooth animations for a dynamic and engaging user experience.
- **Responsive**: Automatically adjusts to different screen sizes for a consistent appearance across devices.
- **TextPath Support**: Utilize `TextPath` for text following the path of the doughnut, providing flexibility in displaying percentage text.

## Installation

```
npm install react-native-doughnut-chart
```

## Peer Dependencies

Make sure to install the following peer dependencies:
```
"peerDependencies": {
  "react": ">=16.8.0",
  "react-native": ">=0.60.0",
  "react-native-svg": ">=12.0.0"
}
```

These are general peer dependency requirements and might need adjustments based on the actual version compatibility of react-native-svg and the dependencies it relies on.

Make sure to check the latest documentation of `react-native-svg` for any changes in peer dependency requirements: [react-native-svg GitHub repository](https://github.com/react-native-svg/react-native-svg).

# Usage
```
import React from 'react';
import DoughnutChart from 'react-native-doughnut-chart';

const App = () => {
  return (
    <DoughnutChart
      percentage={75}
      showPercentage = true,
      size={200}
      fontColor="blue"
      areaBg="grey"
      strokeAreaBg="pink"
    />
  );
};

export default App;
```
Explore the full range of customization options to create doughnut charts that seamlessly integrate into your React Native applications.