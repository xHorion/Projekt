import { defineStore } from 'pinia'

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
}

export const useContactStore = defineStore('contact', {
  state: () => ({
    messages: [] as ContactMessage[],
    selectedMessage: null as ContactMessage | null
  }),
  actions: {
    sendMessage(payload: Omit<ContactMessage, 'id' | 'date'>) {
      const newMessage: ContactMessage = {
        ...payload,
        id: Date.now(), // Уникальный номер заявки
        date: new Date().toLocaleString()
      };
      this.messages.push(newMessage);
      localStorage.setItem('contact_messages', JSON.stringify(this.messages));
    },
    selectMessage(id: number) {
      this.selectedMessage = this.messages.find(m => m.id === id) || null;
    },
    loadMessages() {
      const saved = localStorage.getItem('contact_messages');
      if (saved) this.messages = JSON.parse(saved);
    }
  }
})
