import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Send, Calendar } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import FitCard from '@/components/ui/FitCard';
import FitButton from '@/components/ui/FitButton';

// Mock data for chat messages
const initialMessages = [
  {
    id: '1',
    text: 'Halo, saya Dr. Anisa. Ada yang bisa saya bantu terkait pola makan atau program diet Anda?',
    sender: 'nutritionist',
    timestamp: new Date(Date.now() - 3600000),
  },
];

export default function ConsultationScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [showScheduleOptions, setShowScheduleOptions] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setNewMessage('');

    // Simulate nutritionist response after a short delay
    setTimeout(() => {
      const nutritionistResponse = {
        id: (Date.now() + 1).toString(),
        text: 'Terima kasih atas pertanyaannya. Untuk diet rendah kalori, saya sarankan konsumsi protein tanpa lemak, sayuran, dan buah-buahan. Hindari makanan olahan dan tinggi gula.',
        sender: 'nutritionist',
        timestamp: new Date(),
      };
      setMessages(prevMessages => [...prevMessages, nutritionistResponse]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Konsultasi Ahli Gizi</Text>
        <TouchableOpacity
          style={styles.scheduleButton}
          onPress={() => setShowScheduleOptions(!showScheduleOptions)}
        >
          <Calendar size={24} color={Colors.light.primary} />
        </TouchableOpacity>
      </View>

      {showScheduleOptions && (
        <FitCard style={styles.scheduleCard}>
          <Text style={styles.scheduleTitle}>Jadwalkan Konsultasi</Text>
          <Text style={styles.scheduleSubtitle}>Pilih tanggal dan waktu untuk konsultasi video:</Text>
          <View style={styles.dateOptions}>
            <TouchableOpacity style={[styles.dateOption, styles.dateOptionSelected]}>
              <Text style={styles.dateDay}>Sen</Text>
              <Text style={styles.dateNumber}>15</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateOption}>
              <Text style={styles.dateDay}>Sel</Text>
              <Text style={styles.dateNumber}>16</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateOption}>
              <Text style={styles.dateDay}>Rab</Text>
              <Text style={styles.dateNumber}>17</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateOption}>
              <Text style={styles.dateDay}>Kam</Text>
              <Text style={styles.dateNumber}>18</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dateOption}>
              <Text style={styles.dateDay}>Jum</Text>
              <Text style={styles.dateNumber}>19</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.timeOptions}>
            <TouchableOpacity style={styles.timeOption}>
              <Text style={styles.timeText}>09:00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.timeOption, styles.timeOptionSelected]}>
              <Text style={styles.timeTextSelected}>10:30</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeOption}>
              <Text style={styles.timeText}>13:00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeOption}>
              <Text style={styles.timeText}>15:30</Text>
            </TouchableOpacity>
          </View>
          <FitButton
            title="Jadwalkan Konsultasi"
            onPress={() => setShowScheduleOptions(false)}
            style={styles.scheduleConfirmButton}
          />
        </FitCard>
      )}

      <ScrollView style={styles.messagesContainer}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageBubble,
              message.sender === 'user'
                ? styles.userMessageBubble
                : styles.nutritionistMessageBubble,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
            <Text style={styles.messageTimestamp}>{formatTime(message.timestamp)}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ketik pesan..."
          value={newMessage}
          onChangeText={setNewMessage}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Send size={20} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  scheduleButton: {
    padding: 8,
  },
  scheduleCard: {
    margin: 16,
  },
  scheduleTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 8,
  },
  scheduleSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
    marginBottom: 16,
  },
  dateOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dateOption: {
    width: 48,
    height: 64,
    borderRadius: 8,
    backgroundColor: Colors.light.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateOptionSelected: {
    backgroundColor: Colors.light.primary,
  },
  dateDay: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Colors.light.darkGray,
  },
  dateNumber: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  timeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  timeOption: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: Colors.light.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeOptionSelected: {
    backgroundColor: Colors.light.primary,
  },
  timeText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  timeTextSelected: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  scheduleConfirmButton: {
    width: '100%',
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  userMessageBubble: {
    backgroundColor: Colors.light.primary,
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  nutritionistMessageBubble: {
    backgroundColor: Colors.light.lightGray,
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.text,
  },
  messageTimestamp: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: Colors.light.darkGray,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.light.border,
    backgroundColor: Colors.light.background,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.light.lightGray,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    maxHeight: 100,
    fontFamily: 'Poppins-Regular',
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});