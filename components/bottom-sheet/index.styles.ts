import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
    modal:{
        margin:0,
        width:"100%",
        justifyContent:"flex-end"
      },
      container:{
        backgroundColor:Colors.white,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        alignItems:"center",
        paddingHorizontal:25,
        paddingVertical:25
      },
      title:{
        fontSize:20,
        fontWeight:'bold',
      },
      subTitle:{
        marginVertical:18,
        textAlign:'center'
      }
});