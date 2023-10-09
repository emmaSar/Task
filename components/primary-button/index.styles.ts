import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
    container: {
        paddingVertical:20,
        width:'100%',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.darkBlue
    },
    title:{
        color:Colors.white
    }
});