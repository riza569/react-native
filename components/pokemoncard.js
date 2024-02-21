import { Image, Platform, StyleSheet, Text, View } from "react-native";
const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};
export default function Pokemoncard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>💖{hp}</Text>
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={image}
        accessibilityLabel="pokemon"
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.emoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>
      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          weaknesses: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderColor: "black",
    padding: 1,
    margin: 16,
    ...Platform.select({
      ios: {},
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 22,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 4,
  },
  emoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    padding: 3,
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    padding: 3,
    fontSize: 22,
    fontWeight: "bold",
  },
});
