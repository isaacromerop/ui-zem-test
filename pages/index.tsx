import type { NextPage } from "next";
import { Fragment } from "react";
import { AddPerson } from "../components/add-person";
import { BeCounted } from "../components/be-counted";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";
import { PreviousRulings } from "../components/previous-rulings";

const Home: NextPage = () => {
  return (
    <Layout>
      <Fragment>
        <Hero />
        <BeCounted />
        <PreviousRulings />
        <AddPerson />
      </Fragment>
    </Layout>
  );
};

export default Home;
