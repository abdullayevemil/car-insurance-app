# Car Insurance Mobile (Expo)

This is a minimal Expo React Native scaffold created to integrate UIPro-generated screens.
It contains a `Connecting` screen converted from the UIPro export and a tiny API wrapper.

Quick start

1. Install dependencies

```bash
cd mobile
npm install
# or with yarn
# yarn
```

2. Start the Expo dev server

```bash
npm run start
# then open on device / simulator via the Expo UI
```

Change the API base URL

Open `src/api/index.js` and set `API_BASE_URL` environment variable (or edit the default). Example:

```bash
# macOS / zsh
export API_BASE_URL=https://your-backend.example.com
npm run start
```

Notes

- Assets from UIPro are stored in `assets/uipro`.
- The `Connecting` screen calls `api.connect()` on mount. Replace `/connect` with your real endpoint.

Next steps I can take for you

- Integrate this screen into your existing app if you point me to its path.
- Replace `axios` calls with your project's HTTP client and wire real authentication.
- Add navigation and link this screen into the flow.
