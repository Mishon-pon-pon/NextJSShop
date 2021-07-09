import { InferGetStaticPropsType } from "next";
import React from "react";
import { Provider } from "react-redux";
import { Header } from "../ui/components/Header";
import Layout from "../ui/Layout";
import { FetchGoods } from "../ui/Layout/request";
import store from "../ui/store";
import { setGoods } from "../ui/store/Goods";

export async function getStaticProps() {
  const goods = await FetchGoods();
  return {
    props: {
      goods: goods,
    },
  }
}

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  store.dispatch(setGoods(props.goods))
  return (
    <React.Fragment>
      <Provider store={store}>
        <Header />
        <Layout />
      </Provider>
    </React.Fragment>
  );
}
