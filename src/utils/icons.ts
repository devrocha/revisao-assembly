import {
  createIcons,
  User,
  LogOut,
  NotebookPen,
  Heart,
  MessageCircle
} from "lucide";

export function icons() {
  createIcons({
    icons: {
      User,
      LogOut,
      NotebookPen,
      Heart,
      MessageCircle
    }
  });
} 