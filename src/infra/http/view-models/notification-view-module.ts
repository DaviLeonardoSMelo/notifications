import { Notification } from "@application/entities/notification";

export class NotificationViewModule {
    static toHTTP(notification: Notification) {
        return {
            id: notification.id,
        content: notification.content,
        category: notification.category,
        recipientId: notification.recipientId,
        }
    }
}