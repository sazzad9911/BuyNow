import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit'
import Product from '../Cart/Product';

const AdminDashboard = () => {
    const screenWidth = Dimensions.get("window").width;
    const data = {
        labels: ["Laptop", "Monitor", "Mobile", "Camera", "AC", "FAN", "Freeze"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Products"] // optional
    };
    const chartConfig = {
        backgroundGradientFrom: "#2980B9",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#2980B9",
        backgroundGradientToOpacity: 0.9,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        propsForLabels: {
            stroke: '#ffff'
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffff"
        }
    };
    return (
        <View>
            <LineChart style={{ margin: 10, borderRadius: 20 }}
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
            <ScrollView>
                <Text style={{
                    margin: 5,
                    marginLeft: 10,
                    fontSize: 16,
                    fontWeight: '800'
                }}>Laptop :</Text>
                <ScrollView horizontal={true}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </ScrollView>
                <Text style={{
                    margin: 5,
                    marginLeft: 10,
                    fontSize: 16,
                    fontWeight: '800'
                }}>Laptop :</Text>
                <ScrollView horizontal={true}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </ScrollView>
            </ScrollView>
        </View>
    );
};

export default AdminDashboard;