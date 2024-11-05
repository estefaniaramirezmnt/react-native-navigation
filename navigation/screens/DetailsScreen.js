import { Button, StyleSheet, Text, View } from 'react-native';

const DetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Button title="Go to Home" />
        </View>
    );
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});