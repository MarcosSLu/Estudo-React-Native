import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { db } from './firebaseConection'
import { deleteDoc, doc } from "firebase/firestore";

export default function UserList({ data, handleEdit }) {

    async function handleDeleteUser() {
        const docRef = doc(db, 'users', data.id)
        await deleteDoc(docRef)
    }

    function handleEditUser() {
        handleEdit(data)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.item}>Nome: {data.nome}</Text>
            <Text style={styles.item}>Idade: {data.idade}</Text>
            <Text style={styles.item}>Cargo: {data.cargo}</Text>

            <TouchableOpacity style={styles.areaBtnDelete} onPress={handleDeleteUser}>
                <Text style={styles.textBtn}>Deletar Usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.areaBtnEdit} onPress={handleEditUser}>
                <Text style={styles.textBtnEdit}>Editar Usuário</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        padding: 8,
        borderRadius: 4,
        marginBottom: 14,
    },
    item: {
        color: '#000',
        fontSize: 16,
    },
    areaBtnDelete: {
        backgroundColor: '#B3461E',
        alignSelf: 'stretch',
        padding: 4,
        borderRadius: 4,
        marginTop: 14
    },
    textBtn: {
        color: '#FFF',
        paddingLeft: 8,
        paddingRight: 8,
    },
    areaBtnEdit: {
        backgroundColor: '#000',
        alignSelf: 'stretch',
        padding: 4,
        borderRadius: 4,
        marginTop: 14
    },
    textBtnEdit: {
        color: '#FFF'
    }
})