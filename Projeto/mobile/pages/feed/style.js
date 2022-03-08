import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
    },
    search: {
        width: "78%",
        height: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 6,
        margin: 20
    },
    searchimage: {
        margin: 23,
        width: 25,
        height: 25,
        right: 25
    },
    colorbusca: {
        width: "100%",
        height: "12%",
        backgroundColor: "#FBEAEA",
        display: "flex",
        flexDirection: "row",
    },
    best: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        height: 50
    },
    bestText: {
        fontSize: 15,
        color: "#E50F90",
        fontWeight: "bold",
        padding: 8,
    },
    imageWid: {
        width: 25,
        height: 25
    },
    cards: {
        backgroundColor: "#F3F5F8",
        width: '90%',
        height: 85,
        justifyContent: 'space-between',
        borderRadius: 6,
        left: 18,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 4
    },
    imagecard: {
        width: 50,
        height: 50,
        margin: 15,
        backgroundColor: "#e5e5e5",
        borderRadius: 50
    },
    nameestab: {
        fontSize: 18,
        fontWeight: "bold",
        right: 27
    },
    mediaaval: {
        height: 25,
        width: 50,
        borderRadius: 8,
        textAlign: "center",
        backgroundColor: "#fff",
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10,
        margin: 15
    }
})