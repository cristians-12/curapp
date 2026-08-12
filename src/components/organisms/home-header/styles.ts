import { colors } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: 200,

  },
  
    encabezado : {
    width: "100%",
    overflow: "hidden",
    alignItems: "flex-start",
    paddingTop: 16,
    paddingLeft: 16,
  },

    textSaludo: { 
      color: 'white',
      fontSize: 20, 
      fontWeight: '700', 
      textAlign: "left"
    },
  
    tarjetasInicio: {
      width: 150,
      height: 100,
      backgroundColor: "#15897f",
      borderRadius: 10,
      padding: 14,
    },
 
    textnum: { 
      color: 'white',  
      fontSize: 25,  
      fontWeight: '700',
      textAlign: "left",
      alignSelf: "flex-start"
    },
    
      text: {
      color: 'white', 
      fontSize: 12,
    },


});
