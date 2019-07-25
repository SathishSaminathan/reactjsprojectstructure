import { notification } from "antd";

export const showNotifications = (
  type,
  title = "Please give Notification Title ",
  message = "Please provide message to show --> showNotifications(NotificationType,NotificationTitle, NotificationMessage )"
) => {
  notification.config({
    duration: 2
  });
  notification[type]({
    message: title,
    description: message,
    style: {
      width: 400
    }
  });
};
