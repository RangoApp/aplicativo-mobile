import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textAboveBanner}>Explore os melhores restaurantes da cidade</Text>
            <Image
                source={require("../../assets/rango-banner.jpeg")}
                style={styles.banner}
            />
            <Text style={styles.textBelowBanner}>Falta pouco para matar a sua fome</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Restaurants')}
            >
                <Text style={styles.buttonText}>Ver Restaurantes</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#d9c9bd',
    },
    textAboveBanner: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#555',
        textAlign: 'center',
    },
    banner: {
        width: 320,
        height: 280,
        borderRadius: 90,
        marginBottom: 30,
    },
    textBelowBanner: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#42b456',
        paddingVertical: 15,
        paddingHorizontal: 70,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HomeScreen;
