## Crypto Current — Cryptocurrency Quotes

Live website: https://lucas-chavez-crypto.netlify.app/

Crypto Current is a React app to get real-time cryptocurrency quotes powered by the CryptoCompare API. Pick a fiat currency and a cryptocurrency to see the current price, daily high/low, 24h change, and last update.

### Features

- Real-time quotes (no API key required)
- Currency and cryptocurrency selectors
- Loading spinner while fetching
- Responsive UI styled with Emotion

### Tech Stack

- React (Create React App)
- Emotion (styled components)
- Axios

### Screenshot

<img src="src/cryptomonedas.png" alt="Crypto Current screenshot" width="600" />

## Getting Started

Prerequisites:

- Node.js LTS recommended. If using Node 17+ and you see an OpenSSL error, see the note below.

Install and run:

```powershell
npm install
npm start
```

The app runs at http://localhost:3000.

### Fix for OpenSSL error on Node 17+ (ERR_OSSL_EVP_UNSUPPORTED)

If you get `error:0308010C:digital envelope routines::unsupported`, run:

```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm start
```

Or use a Node LTS where this isn’t necessary (e.g., 16.x/18.x/20.x), or upgrade react-scripts to v5.

## Project Structure

```
src/
	App.js
	components/
		Formulario.js
		Cotizacion.js
		Error.js
		Spinner.js
	hooks/
		useMoneda.js
		useCriptomoneda.js
```

## Deployment

Deployed on Netlify. To deploy your own fork, connect the GitHub repo in Netlify. Build command: `npm run build`. Publish directory: `build`.

## Author

© 2025 Lucas Chavez
