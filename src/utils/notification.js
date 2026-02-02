import { message, notification } from 'antd';

/**
 * Notification utility helpers
 * Wrappers around Ant Design message and notification components
 */

/**
 * Show success message
 * @param {string} content - Message content
 * @param {number} duration - Duration in seconds (default: 3)
 */
export const success = (content = 'Success!', duration = 3) => {
  message.success(content, duration);
};

/**
 * Show error message
 * @param {string} content - Message content
 * @param {number} duration - Duration in seconds (default: 3)
 */
export const error = (content = 'Error occurred', duration = 3) => {
  message.error(content, duration);
};

/**
 * Show info message
 * @param {string} content - Message content
 * @param {number} duration - Duration in seconds (default: 3)
 */
export const info = (content = 'Info', duration = 3) => {
  message.info(content, duration);
};

/**
 * Show warning message
 * @param {string} content - Message content
 * @param {number} duration - Duration in seconds (default: 3)
 */
export const warning = (content = 'Warning', duration = 3) => {
  message.warning(content, duration);
};

/**
 * Show success notification
 * @param {string} message - Notification title
 * @param {string} description - Notification description
 * @param {number} duration - Duration in seconds (default: 4.5)
 */
export const notifySuccess = (message, description, duration = 4.5) => {
  notification.success({
    message,
    description,
    duration,
    placement: 'topRight',
  });
};

/**
 * Show error notification
 * @param {string} message - Notification title
 * @param {string} description - Notification description
 * @param {number} duration - Duration in seconds (default: 4.5)
 */
export const notifyError = (message, description, duration = 4.5) => {
  notification.error({
    message,
    description,
    duration,
    placement: 'topRight',
  });
};

/**
 * Show info notification
 * @param {string} message - Notification title
 * @param {string} description - Notification description
 * @param {number} duration - Duration in seconds (default: 4.5)
 */
export const notifyInfo = (message, description, duration = 4.5) => {
  notification.info({
    message,
    description,
    duration,
    placement: 'topRight',
  });
};

/**
 * Show warning notification
 * @param {string} message - Notification title
 * @param {string} description - Notification description
 * @param {number} duration - Duration in seconds (default: 4.5)
 */
export const notifyWarning = (message, description, duration = 4.5) => {
  notification.warning({
    message,
    description,
    duration,
    placement: 'topRight',
  });
};

export default {
  success,
  error,
  info,
  warning,
  notifySuccess,
  notifyError,
  notifyInfo,
  notifyWarning,
};
