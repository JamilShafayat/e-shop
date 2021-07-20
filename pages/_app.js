import { Provider } from "react-redux";
import Layout from "../components/Layout/Layout";
import { store } from "../store";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
