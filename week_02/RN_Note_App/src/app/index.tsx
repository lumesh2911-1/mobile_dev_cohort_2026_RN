import { FontAwesome } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import {
  FlatList,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const INITIAL_NOTES = [
  {
    id: "1",
    title: "My first note",
    content: "This is my first note",
    date: "11/05/2026",
  },
  {
    id: "2",
    title: "My second note",
    content: "This is my second note",
    date: "11/05/2026",
  },
];

const COLORS = {
  light: {
    background: "#F3F4F6",
    card: "#FFFFFF",
    text: "#111827",
    subText: "#6B7280",
    border: "#E5E7EB",
    input: "#F9FAFB",
  },

  dark: {
    background: "#111827",
    card: "#1F2937",
    text: "#FFFFFF",
    subText: "#9CA3AF",
    border: "#374151",
    input: "#374151",
  },
};

export default function Index() {
  const systemTheme = useColorScheme();

  const [darkMode, setDarkMode] = useState(systemTheme === "dark");

  const [notes, setNotes] = useState(INITIAL_NOTES);

  const [search, setSearch] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const theme = darkMode ? COLORS.dark : COLORS.light;

  const filteredNotes = useMemo(() => {
    return notes.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase()),
    );
  }, [notes, search]);

  const handleAddNote = () => {
    if (!title.trim() || !content.trim()) return;

    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toLocaleDateString("en-GB"),
    };

    setNotes((prev) => [newNote, ...prev]);

    setTitle("");
    setContent("");
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.noteCard,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={[styles.noteTitle, { color: theme.text }]}>
          {item.title}
        </Text>

        <Text style={[styles.noteContent, { color: theme.subText }]}>
          {item.content}
        </Text>
      </View>

      <Text style={[styles.noteDate, { color: theme.subText }]}>
        {item.date}
      </Text>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />

      {/* Header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
          },
        ]}
      >
        <Text style={[styles.heading, { color: theme.text }]}>Notes App</Text>

        <View style={styles.row}>
          {/* Add Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setModalVisible(true)}
            style={[
              styles.iconButton,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
              },
            ]}
          >
            <FontAwesome name="plus" size={18} color={theme.text} />
          </TouchableOpacity>

          {/* Theme Toggle */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setDarkMode((prev) => !prev)}
            style={[
              styles.iconButton,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
              },
            ]}
          >
            <FontAwesome
              name={darkMode ? "moon-o" : "sun-o"}
              size={18}
              color={theme.text}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search */}
      <View
        style={[
          styles.searchContainer,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
          },
        ]}
      >
        <FontAwesome name="search" size={16} color={theme.subText} />

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search notes..."
          placeholderTextColor={theme.subText}
          style={[styles.searchInput, { color: theme.text }]}
        />
      </View>

      {/* Notes */}
      <FlatList
        data={filteredNotes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View
            style={[styles.modalContainer, { backgroundColor: theme.card }]}
          >
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: theme.text }]}>
                Add Note
              </Text>

              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <FontAwesome name="close" size={20} color={theme.text} />
              </TouchableOpacity>
            </View>

            {/* Title Input */}
            <TextInput
              value={title}
              onChangeText={setTitle}
              placeholder="Note title"
              placeholderTextColor={theme.subText}
              style={[
                styles.input,
                {
                  backgroundColor: theme.input,
                  borderColor: theme.border,
                  color: theme.text,
                },
              ]}
            />

            {/* Content Input */}
            <TextInput
              value={content}
              onChangeText={setContent}
              placeholder="Note content"
              placeholderTextColor={theme.subText}
              multiline
              style={[
                styles.input,
                styles.textArea,
                {
                  backgroundColor: theme.input,
                  borderColor: theme.border,
                  color: theme.text,
                },
              ]}
            />

            {/* Buttons */}
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={[styles.actionButton, { backgroundColor: "red" }]}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleAddNote}
                style={[styles.actionButton, { backgroundColor: "green" }]}
              >
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 10,
    backgroundColor: "#fff",
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 14,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 14,
    marginBottom: 14,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
  },

  listContainer: {
    paddingBottom: 20,
  },

  noteCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 14,
  },

  noteTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
  },

  noteContent: {
    fontSize: 14,
    lineHeight: 20,
  },

  noteDate: {
    fontSize: 12,
    marginLeft: 10,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  modalContainer: {
    borderRadius: 10,
    padding: 20,
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 14,
  },

  textArea: {
    minHeight: 120,
    textAlignVertical: "top",
  },

  actionButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
  },
});
