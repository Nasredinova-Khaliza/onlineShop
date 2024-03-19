import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface ReduxProviderType {
	children: ReactNode;
}

export const ReduxProvider = ({ children }: ReduxProviderType) => {
	return <Provider store={store}>{children}</Provider>;
};
