import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { QrCode, Clock, MapPinIcon, Trash2, Calendar, CircleCheckBig, CircleXIcon } from "lucide-react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function CollectRequest() {
    return (
        <ScrollView>
            <KeyboardAwareScrollView
                style={styles.container}
                contentContainerStyle={styles.scrollContainer}
                enableOnAndroid={true}
                extraScrollHeight={20} // Ajustez cette valeur si nécessaire
                keyboardShouldPersistTaps="handled"
            >
                <Text style={styles.header}>Demandes de collecte</Text>
                <View style={''}>
                    <TouchableOpacity style={styles.scanButton}>
                        <QrCode size={20} color="#fff" />
                        <Text style={styles.scanButtonText}>Scanner QR Code</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    {/* Détails de la collecte */}
                    <View>
                        <View style={styles.cardHeader}>
                            <Text style={styles.collectType}>Recyclables</Text>
                            <Text style={styles.historyStatusPending}>En attente</Text>
                        </View>
                        <View>
                            <View style={styles.collectInfo}>
                                <MapPinIcon color='gray' size={15} />
                                <Text style={styles.collectInfoText}>12 Rue Victor Hugo</Text>
                            </View>
                            <View style={styles.collectInfoContainer}>
                                <View style={styles.collectInfo}>
                                    <Trash2 color='gray' size={15} />
                                    <Text style={styles.collectInfoText}>5kg</Text>
                                </View>
                                <View>
                                    <View style={styles.collectInfo}>
                                        <Calendar color='gray' size={15} />
                                        <Text style={styles.collectInfoText}>22/03/2025</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.collectTime}>
                            <Clock color='gray' size={15} />
                            <Text style={styles.collectTimeText}>10:00 - 12:00</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.acceptButton}>
                                <CircleCheckBig color='white' />
                                <Text style={styles.acceptButtonText}>Accepter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.refuseButton}>
                                <CircleXIcon color='black' />
                                <Text style={styles.refuseButtonText}>Refuser</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    {/* Détails de la collecte */}
                    <View>
                        <View style={styles.cardHeader}>
                            <Text style={styles.collectType}>Recyclables</Text>
                            <Text style={styles.historyStatusPending}>En attente</Text>
                        </View>
                        <View>
                            <View style={styles.collectInfo}>
                                <MapPinIcon color='gray' size={15} />
                                <Text style={styles.collectInfoText}>12 Rue Victor Hugo</Text>
                            </View>
                            <View style={styles.collectInfoContainer}>
                                <View style={styles.collectInfo}>
                                    <Trash2 color='gray' size={15} />
                                    <Text style={styles.collectInfoText}>5kg</Text>
                                </View>
                                <View>
                                    <View style={styles.collectInfo}>
                                        <Calendar color='gray' size={15} />
                                        <Text style={styles.collectInfoText}>22/03/2025</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.collectTime}>
                            <Clock color='gray' size={15} />
                            <Text style={styles.collectTimeText}>10:00 - 12:00</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.acceptButton}>
                                <CircleCheckBig color='white' />
                                <Text style={styles.acceptButtonText}>Accepter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.refuseButton}>
                                <CircleXIcon color='black' />
                                <Text style={styles.refuseButtonText}>Refuser</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    {/* Détails de la collecte */}
                    <View>
                        <View style={styles.cardHeader}>
                            <Text style={styles.collectType}>Recyclables</Text>
                            <Text style={styles.historyStatusPending}>En attente</Text>
                        </View>
                        <View>
                            <View style={styles.collectInfo}>
                                <MapPinIcon color='gray' size={15} />
                                <Text style={styles.collectInfoText}>12 Rue Victor Hugo</Text>
                            </View>
                            <View style={styles.collectInfoContainer}>
                                <View style={styles.collectInfo}>
                                    <Trash2 color='gray' size={15} />
                                    <Text style={styles.collectInfoText}>5kg</Text>
                                </View>
                                <View>
                                    <View style={styles.collectInfo}>
                                        <Calendar color='gray' size={15} />
                                        <Text style={styles.collectInfoText}>22/03/2025</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.collectTime}>
                            <Clock color='gray' size={15} />
                            <Text style={styles.collectTimeText}>10:00 - 12:00</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.acceptButton}>
                                <CircleCheckBig color='white' />
                                <Text style={styles.acceptButtonText}>Accepter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.refuseButton}>
                                <CircleXIcon color='black' />
                                <Text style={styles.refuseButtonText}>Refuser</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    card: {
        backgroundColor: "white",
        padding: 20,
        borderWidth: 1,
        borderColor: '#E6E6E9',
        borderRadius: 8,
        marginBottom: 15,
    },
    cardHeader: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 5,
    },
    cardSubtitle: {
        fontSize: 14,
        color: "gray",
        marginBottom: 10,
    },
    collectType: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    collectInfoContainer: {
        display: 'flex',
        flexDirection: "row",
        gap: 120,
    },
    collectInfo: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 4,
        marginBottom: 5,
    },
    collectInfoText: {
        fontSize: 14,
        color: "gray",
    },
    collectTime: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    collectTimeText: {
        fontSize: 14,
        marginLeft: 5,
    },
    scanButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        backgroundColor: "#16A349",
        paddingVertical: 12,
        borderRadius: 6,
        marginVertical: 10,
    },
    scanButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: 500,
    },
    historyStatusPending: {
        fontSize: 14,
        color: '#000',
        fontWeight: 500,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E6E6E9',
        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
    },
    acceptButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: "#16A349",
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 6,
        alignItems: "center",
    },
    acceptButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: 500,
    },
    refuseButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#E6E6E9',
        alignItems: "center",
    },
    refuseButtonText: {
        fontSize: 16,
        fontWeight: 500,
    },
});