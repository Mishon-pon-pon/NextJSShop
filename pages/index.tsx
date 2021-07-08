import React from "react";
import { Provider } from "react-redux";
import { Header } from "../ui/components/Header";
import { Layout } from "../ui/Layout";
import store from "../ui/store";


export default function Home() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Header />
        <Layout />
      </Provider>
    </React.Fragment>
  );
}
