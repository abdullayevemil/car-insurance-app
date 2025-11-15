import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import api from '../api';

// Connecting screen converted from UIPro export.
// Shows a centered "Connecting..." title and helper text, and calls `api.connect()` on mount.
export default function ConnectingScreen() {
  const [status, setStatus] = useState('connecting'); // 'connecting' | 'success' | 'error'

  useEffect(() => {
    let mounted = true;
    api
      .connect()
      .then(() => {
        if (!mounted) return;
        setStatus('success');
      })
      .catch(() => {
        if (!mounted) return;
        setStatus('error');
      });
    return () => (mounted = false);
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.center}>
        {status === 'connecting' && (
          <ActivityIndicator size="large" color="#313131" style={{ marginBottom: 20 }} />
        )}
        <Text style={styles.title}>Connecting...</Text>
        <Text style={styles.subtitle}>Please do not close the application</Text>
      </View>

      <View style={styles.bottom}>
        <View style={styles.indicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fdfdfd'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 24
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#201e1e',
    textAlign: 'center'
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 24,
    color: '#57595a',
    textAlign: 'center'
  },
  bottom: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicator: {
    width: 134,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#313131'
  }
});
