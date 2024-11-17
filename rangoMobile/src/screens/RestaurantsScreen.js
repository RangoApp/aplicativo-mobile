import React, {  useState, useCallback } from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; // Ícones para o menu
import api from "../../services/api";

const RestaurantsScreen = () => {
    const [restaurants, setRestaurants] = useState([]);
    const navigation = useNavigation();

    const fetchRestaurants = async () => {
        try {
            const response = await api.get('/restaurantes');
            setRestaurants(response.data);
        } catch (error) {
            console.error('Erro ao buscar restaurantes:', error);
            Alert.alert('Erro', 'Não foi possível carregar os restaurantes');
        }
    };

    const confirmDelete = (id) => {
        Alert.alert(
            'Confirmação',
            'Tem certeza de que deseja deletar este restaurante?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Deletar', onPress: () => deleteRestaurant(id), style: 'destructive' },
            ]
        );
    };

    const deleteRestaurant = async (id) => {
        try {
            await api.delete(`/restaurantes/${id}`);
            Alert.alert('Sucesso', 'Restaurante deletado com sucesso!');
            fetchRestaurants();
        } catch (error) {
            console.error('Erro ao deletar restaurante:', error);
            Alert.alert('Erro', 'Não foi possível deletar o restaurante.');
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchRestaurants();
        }, [])
    );

    const renderRestaurant = ({ item }) => (
        <View style={styles.card}>
            {/* Imagem na parte superior */}
            {item.imagem ? (
                <Image
                    source={{ uri: `data:image/jpeg;base64,${item.imagem}` }}
                    style={styles.image}
                />
            ) : (
                <Text style={styles.noImageText}>Imagem não disponível</Text>
            )}

            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.nome}</Text>
                <Text style={styles.description}>{item.descricao}</Text>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => Alert.alert(
                        'Opções',
                        'Escolha uma ação',
                        [
                            { text: 'Editar', onPress: () => navigation.navigate('RestaurantForm', { id: item.id }) },
                            { text: 'Deletar', onPress: () => confirmDelete(item.id), style: 'destructive' },
                            { text: 'Cancelar', style: 'cancel' },
                        ]
                    )}
                >
                    <MaterialIcons name="more-vert" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Restaurantes</Text>
                <Image source={require('../../assets/rango-logo.png')} style={styles.icon} />
            </View>
            <FlatList
                data={restaurants}
                renderItem={renderRestaurant}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<Text style={styles.emptyText}>Nenhum restaurante encontrado</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1eae9',
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 16,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: '100%',
        height: 120,
    },
    infoContainer: {
        padding: 16,
        position: 'relative',
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
    },
    menuButton: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    icon: {
        width: 30,
        height: 30,
    },
    noImageText: {
        textAlign: 'center',
        color: '#aaa',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#888',
    },
});

export default RestaurantsScreen;
