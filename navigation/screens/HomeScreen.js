import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>You're welcome</Text>
            <Button title="Go to Details" />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});    
