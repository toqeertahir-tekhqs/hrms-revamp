import * as signalR from '@microsoft/signalr';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const useNotificationService = () => {
  const { token } = useSelector((state) => state.states);
  const connectionRef = useRef(null);
  const [realTimeNotification, setRealTimeNotification] = useState(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const isConnectingRef = useRef(false);
  const isMountedRef = useRef(true);

  const cleanupConnection = useCallback(async () => {
    if (connectionRef.current) {
      try {
        connectionRef.current.off('Connected');
        connectionRef.current.off('ReceiveNotification');
        connectionRef.current.off('UnreadCount');
        connectionRef.current.onreconnecting(null);
        connectionRef.current.onreconnected(null);
        connectionRef.current.onclose(null);

        await connectionRef.current.stop();
      } catch (error) {
        console.warn('Error stopping connection:', error);
      } finally {
        connectionRef.current = null;
        if (isMountedRef.current) {
          setIsConnected(false);
        }
      }
    }
    isConnectingRef.current = false;
  }, []);

  const setupConnection = useCallback(async () => {
    if (isConnectingRef.current || !token || !isMountedRef.current) {
      return;
    }

    isConnectingRef.current = true;
    await cleanupConnection();

    try {
      const connection = new signalR.HubConnectionBuilder()
        .withUrl(`${import.meta.env.VITE_BASE_URL}/notificationHub`, {
          accessTokenFactory: () => token,
          transport: signalR.HttpTransportType.WebSockets, // Only WebSockets
          // skipNegotiation: true, // REMOVED - let SignalR negotiate
        })
        .withAutomaticReconnect([0, 2000, 10000, 30000])
        .configureLogging(signalR.LogLevel.Warning)
        .build();

      connection.onreconnecting(() => {
        if (isMountedRef.current) setIsConnected(false);
      });

      connection.onreconnected(async () => {
        if (isMountedRef.current) {
          setIsConnected(true);
          try {
            await connection.invoke('GetUnreadCount');
          } catch (error) {
            console.error('Failed to get unread count:', error);
          }
        }
      });

      connection.onclose(() => {
        if (isMountedRef.current) setIsConnected(false);
        connectionRef.current = null;
        isConnectingRef.current = false;
      });

      connection.on('ReceiveNotification', (notification) => {
        if (isMountedRef.current) {
          setRealTimeNotification(notification);
        }
      });

      connection.on('UnreadCount', (count) => {
        if (isMountedRef.current) {
          setUnreadCount(count);
        }
      });

      connection.on('Connected', async () => {
        if (isMountedRef.current) {
          setIsConnected(true);
          try {
            await connection.invoke('GetUnreadCount');
          } catch (error) {
            console.error('Failed to get unread count:', error);
          }
        }
      });

      await connection.start();
      console.log('Connected:', connection.connectionId);

      if (isMountedRef.current) {
        connectionRef.current = connection;
      } else {
        await connection.stop();
      }
    } catch (error) {
      console.error('Connection failed:', error);
      isConnectingRef.current = false;
      if (isMountedRef.current) setIsConnected(false);
    }
  }, [token, cleanupConnection]);

  useEffect(() => {
    if (token) {
      setupConnection();
    } else {
      cleanupConnection();
    }
  }, [token, setupConnection, cleanupConnection]);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      cleanupConnection();
    };
  }, [cleanupConnection]);

  return {
    realTimeNotification,
    unreadCount,
    isConnected,
  };
};