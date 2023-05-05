import { View, Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
export default function TelaInicio() {
    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>AGILITY SERVICE</Text>
            <Text style={styles.SubTitulo}>Seu agilizador de serviços</Text>
            <Text style={styles.SubTitulo}>Seu agilizador de serviços</Text>



            <TouchableOpacity>

                <Text style={styles.button}>CHAMAR FISCAL</Text>

            </TouchableOpacity>


        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#209A57',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20
    },

    button:{
        fontSize: 40,
        backgroundColor: '#ff661c',
        fontWeight: 'bold', 
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,

    },
    titulo:{
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 300,
    },
    SubTitulo:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 100
        ,
    }
});