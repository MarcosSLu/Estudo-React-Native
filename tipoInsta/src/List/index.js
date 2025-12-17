import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function List(props) {

    function carrecaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    function mostraLikes(likers){
        if(likers === 0){
            return
        }

        return(
            <Text style={styles.likes}>{likers} {likers > 1 ?  'curtidas' : 'curtida' }</Text>
        )
    }
    return (
        <View>
            <View style={styles.viewPerfil}>
                <Image
                    source={{ uri: props.data.imgperfil }}
                    style={styles.imgPerfil}
                />
                <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
            </View>

            <Image
                resizeMode='cover'
                source={{ uri: props.data.imgPublicacao }}
                style={styles.fotoPublicacao}
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image 
                    source={carrecaIcone(props.data.likeada)}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend}>
                    <Image 
                    source={require('../img/comment.png')}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend}>
                    <Image 
                    source={require('../img/send.png')}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>
            </View>

            {mostraLikes(props.data.likers)}

            <Text style={styles.nomeRodape}>{props.data.nome}</Text>
            <Text style={styles.descricao}>{props.data.descricao}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {

    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    imgPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    nomeUsuario: {
        paddingLeft: 5,
        fontSize: 22,
        color: '#000'
    }, 
    fotoPublicacao:{
        height: 400,
        alignItems: 'center',
    },

    areaBtn:{
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike:{
        width: 25,
        height: 25,
    },
    btnSend:{
        paddingLeft:15
    },
    likes:{
        fontWeight: 'bold',
        marginLeft: 5
    },
    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    descricao:{
        paddingLeft: 5,
        paddingBottom: 15,
        fontSize: 15,
    }
})

