import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, Alert } from 'react-native';

import HomeScreen from '../rangoMobile/src/screens/HomeScreen';
import RestaurantsScreen from '../rangoMobile/src/screens/RestaurantsScreen';
import RestaurantFormScreen from '../rangoMobile/src/screens/RestaurantFormScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name="Welcome"
                    component={HomeScreen}
                    options={{ title: 'Bem-vindo' }}
                />
                <Stack.Screen
                    name="Restaurants"
                    component={RestaurantsScreen}
                    options={({ navigation }) => ({
                        title: 'Sair',
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: 15 }}
                                onPress={() =>
                                    Alert.alert(
                                        'Opções',
                                        'Escolha uma ação:',
                                        [
                                            {
                                                text: 'Adicionar Restaurante',
                                                onPress: () => navigation.navigate('RestaurantForm'),
                                            },
                                            { text: 'Cancelar', style: 'cancel' },
                                        ]
                                    )
                                }
                            >
                                <MaterialIcons name="arrow-drop-down" size={30} color="#42b456" />
                            </TouchableOpacity>
                        ),
                    })}
                />
                <Stack.Screen
                    name="RestaurantForm"
                    component={RestaurantFormScreen}
                    options={{ title: 'Voltar' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
