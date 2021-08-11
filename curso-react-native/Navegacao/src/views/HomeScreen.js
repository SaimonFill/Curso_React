import React, { useState } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const iconSize = 45

const DATA = [
    {
        id: "01",
        title: "Login",
        icon: <Ionicons name="log-in-outline" size={iconSize} color='#fff' />
    },
    {
        id: "02",
        title: "Conexão",
        icon: <Ionicons name="bluetooth-outline" size={iconSize} color='#fff' />
    },
    {
        id: "03",
        title: "Serviços",
        icon: <Ionicons name="briefcase-outline" size={iconSize} color='#fff' />
    },
    {
        id: "04",
        title: "Docs",
        icon: <Ionicons name="folder-open-outline" size={iconSize} color='#fff' />
    },
    {
        id: "05",
        title: "Ajuda",
        icon: <Ionicons name="help-circle-outline" size={iconSize} color='#fff' />
    },
    {
        id: "06",
        title: "Registros",
        icon: <Ionicons name="document-text-outline" size={iconSize} color='#fff' />
    },
    {
        id: "07",
        title: "Info",
        icon: <Ionicons name="information-circle-outline" size={iconSize} color='#fff' />
    },
    {
        id: "08",
        title: "Config",
        icon: <Ionicons name="settings-outline" size={iconSize} color='#fff' />
    },
];

const Item = ({ item, onPress, }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
        <Ionicons style={styles.iconStyle}>{item.icon}</Ionicons>
        <Text style={[styles.title]}>{item.title}</Text>
    </TouchableOpacity>
);

const App = () => {
    const [, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.barraSuperior}>

                <TouchableOpacity >
                    <Ionicons name="menu-outline" size={iconSize} color='#fff' />
                </TouchableOpacity>

                <View style={styles.viewTextoCentral}>
                    <Text style={styles.textoCentral}>
                        Assistente Coester
                    </Text>
                </View>

            </View>

            <View style={styles.viewButton}>
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-evenly', }}
                    data={DATA}
                    horizontal={false}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flex: 1
    },
    barraSuperior: {
        flexDirection: 'row',
        backgroundColor: '#0068DE',
        height: 50,
    },
    item: {
        height: 100,
        width: '28%',
        backgroundColor: '#0068DE',
        borderWidth: 1,
        borderColor: '#ABABAB',
        borderRadius: 15,
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16
    },
    iconStyle: {
        marginTop: 5
    },
    title: {
        fontSize: 18,
        color: '#fff',
        paddingTop: 8
    },
    viewButton: {
        flexGrow: 1,
        flex: 1,
        marginTop: '5%'
    },
    viewTextoCentral: {
        flex: 1,
        justifyContent: 'center',
    },
    textoCentral: {
        textAlign: "center",
        fontSize: 22,
        color: '#fff'
    }
});

export default App;