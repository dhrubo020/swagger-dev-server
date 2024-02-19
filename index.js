const browserSync = require("browser-sync").create();
const net = require("net");
const dotenv = require("dotenv");
dotenv.config();

const apiSyncFiles = process.env.API_SYNC_FILES || "./src/**/*.ts";
const reloadDelay = parseInt(process.env.RELOAD_DELAY) || 5000;
const apiDocPort = process.env.API_DOCUMENTATION_PORT || 3081;
const serverPort = process.env.PORT || 3000;
const apiPath = process.env.API_PATH || "";

const proxyUrl = apiPath.length
	? `http://localhost:${serverPort}/${apiPath}`
	: `http://localhost:${serverPort}`;

const apiDocServer = apiPath.length
	? `http://localhost:${apiDocPort}/${apiPath}`
	: `http://localhost:${apiDocPort}`;

async function startBrowserSync() {
	return new Promise((resolve, reject) => {
		const options = {
			proxy: proxyUrl,
			port: apiDocPort,
			open: false,
			files: [apiSyncFiles],
			reloadDelay,
		};
		browserSync.init(options, (err, bs) => {
			if (err) {
				reject("Can not connect to proxy server");
			} else {
				resolve(bs);
			}
		});
	});
}

function checkLocalhostPort() {
	return new Promise((resolve, reject) => {
		const client = net.createConnection({ port: serverPort }, () => {
			client.end();
			console.log("Port", serverPort, "is open!!");
			resolve(true);
		});

		client.on("error", () => {
			console.log("Port", serverPort, "is not open!!");
			resolve(false);
		});
	});
}

async function main() {
	try {
		const isPortActive = await checkLocalhostPort();
		if (!isPortActive) {
			return;
		}
		await startBrowserSync();
		if (browserSync.active) {
			console.log(`Api Documentation: ${apiDocServer}`);
		}
	} catch (error) {
		console.log(error);
	}
}

main();
