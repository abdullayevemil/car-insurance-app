import axios from 'axios';

// Simple API wrapper. Replace `API_BASE_URL` with your real backend.
const client = axios.create({
  baseURL: process.env.API_BASE_URL || 'https://example.com/api',
  timeout: 10000
});

export default {
  // Example connect call used by the Connecting screen.
  // If your backend doesn't provide `/connect`, replace with an appropriate endpoint.
  connect: async () => {
    try {
      const res = await client.get('/connect');
      return res.data;
    } catch (err) {
      // If the real API isn't available yet, fallback to a short delay so UI still shows a transition.
      await new Promise((r) => setTimeout(r, 1200));
      // Re-throw to allow the screen to show error state if you prefer.
      // For now, return a successful shaped response so the sample app proceeds.
      return { ok: true };
    }
  }
};
