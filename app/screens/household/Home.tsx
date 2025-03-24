import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Award, Leaf, Recycle, BarChart3, Calendar, Plus } from "lucide-react-native";

export default function Home() {
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.header}>Mon espace</Text>
                <TouchableOpacity style={styles.newRequestButton}>
                    <Plus color='white' />
                    <Text style={styles.newRequestText}>Nouvelle demande</Text>
                </TouchableOpacity>

                {/* Bloc Mes Points */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Award size={20} color="#16A349" />
                        <Text style={styles.cardTitle}>Mes points</Text>
                    </View>
                    <Text style={styles.cardSubtitle}>Points accumulés pour vos efforts écologiques</Text>
                    <View style={styles.cardFooter}>
                        <View style={styles.pointsContainer}>
                            <Award color='#16A349' size={40} />
                            <Text style={styles.points}>75</Text>
                        </View>
                        <TouchableOpacity style={styles.exchangeButton}>
                            <Text style={styles.exchangeButtonText}>Échanger</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Bloc Impact Environnemental */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <BarChart3 size={20} color="#4CAF50" />
                        <Text style={styles.cardTitle}>Impact environnemental</Text>
                    </View>
                    <Text style={styles.cardSubtitle}>Votre contribution à l'environnement</Text>
                    <View style={styles.progressContainer}>
                        <View>
                            <View style={styles.progressItem}>
                                <Recycle size={20} color="#4CAF50" />
                                <Text style={styles.progressText}>Déchets recyclés</Text>
                                <Text style={styles.progressValue}>7.5kg</Text>
                            </View>
                            <View style={styles.progressBarContainer}>
                                <View style={[styles.progressBar, { width: "80%" }]} />
                            </View>
                        </View>
                        <View>
                            <View style={styles.progressItem}>
                                <Leaf size={20} color="#4CAF50" />
                                <Text style={styles.progressText}>CO₂ économisé</Text>
                                <Text style={styles.progressValue}>3.2kg</Text>
                            </View>
                            <View style={styles.progressBarContainer}>
                                <View style={[styles.progressBar, { width: "40%" }]} />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Bloc Prochaine Collecte */}
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Calendar size={20} color="#16A349" />
                        <Text style={styles.cardTitle}>Prochaine collecte</Text>
                    </View>
                    <Text style={styles.cardSubtitle}>Votre prochaine collecte programmée</Text>
                    <View style={styles.collectStyle}>
                        <Text style={styles.collectDate}>Date</Text>
                        <Text style={styles.boldText}>22 Mars 2025</Text>
                    </View>
                    <View style={styles.collectStyle}>
                        <Text style={styles.collectType}>Type</Text>
                        <Text style={styles.collectTypeTag}>Électroniques</Text>
                    </View>

                    {/* Historique et Statistiques */}
                    <View style={styles.historyContainer}>
                        <TouchableOpacity style={styles.detailsButton}>
                            <Text style={styles.detailsButtonText}>Voir les détails</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Bloc Historique */}
                <View style={styles.card}>
                    <View style={styles.historySection}>
                        <View style={styles.historyStyle}>
                            <Text style={styles.historyDate}>15 Mars 2025</Text>
                            <Text style={styles.historyStatus}>Complétée</Text>
                        </View>
                        <Text style={styles.historyDetail}>Recyclables - 4.5kg</Text>
                    </View>
                    <TouchableOpacity style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>Détails</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <View style={styles.historySection}>
                        <View style={styles.historyStyle}>
                            <Text style={styles.historyDate}>10 Mars 2025</Text>
                            <Text style={styles.historyStatus}>Complétée</Text>
                        </View>
                        <Text style={styles.historyDetail}>Recyclables - 3kg</Text>
                    </View>
                    <TouchableOpacity style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>Détails</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <View style={styles.historySection}>
                        <View style={styles.historyStyle}>
                            <Text style={styles.historyDate}>22 Mars 2025</Text>
                            <Text style={styles.historyStatusPending}>En attente</Text>
                        </View>
                        <Text style={styles.historyDetail}>Recyclables - 8kg</Text>
                    </View>
                    <TouchableOpacity style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>Détails</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        marginBottom: 20,
        color: '#000',
    },
    newRequestButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: "#16A349",
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: "center",
        marginBottom: 20,
    },
    newRequestText: {
        color: "white",
        fontSize: 16,
        fontWeight: 400,
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
        flexDirection: "row",
        alignItems: "center",
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
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pointsContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    points: {
        fontSize: 32,
        fontWeight: "bold",
        color: "black",
    },
    exchangeButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#E6E6E9',
        marginTop: 10,
    },
    exchangeButtonText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    progressContainer: {
        display: 'flex',
        gap: 20,
        marginTop: 10,
    },
    progressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    progressText: {
        flex: 1,
        marginLeft: 5,
    },
    progressValue: {
        fontWeight: 'bold',
    },
    progressBarContainer: {
        height: 6,
        backgroundColor: '#E6E6E9',
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressBar: {
        height: 6,
        backgroundColor: '#4CAF50',
    },
    collectStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
    collectDate: {
        fontSize: 14,
        marginTop: 5,
    },
    collectType: {
        fontSize: 14,
        marginTop: 5,
    },
    collectTypeTag: {
        backgroundColor: '#16A349',
        color: 'white',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 100,
        fontSize: 12,
    },
    boldText: {
        fontWeight: 'bold',
    },
    historyContainer: {
        marginTop: 10,
    },
    historySection: {
        marginBottom: 10,
    },
    historyDate: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    historyDetail: {
        fontSize: 14,
        marginTop: 5,
        color: 'gray',
    },
    historyStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    historyStatus: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 500,
        backgroundColor: '#16A349',
        borderRadius: 100,
        paddingHorizontal: 10,
        paddingVertical: 2,
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
    historyPoints: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    pointsTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
        backgroundColor: '#EBF6ED',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 100,
    },
    pointsText: {
        fontSize: 14,
        color: '#16A349',
        fontWeight: 500,
    },
    detailsButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#E6E6E9',
        alignItems: 'center',
    },
    detailsButtonText: {
        fontSize: 14,
        fontWeight: 400,
    },
});