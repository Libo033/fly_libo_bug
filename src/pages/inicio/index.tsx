import Layout from "@/Components/Layout";
import React from "react";
import styles from "@/styles/Inicio.module.css";
import LowPrices from "@/Components/LowPrices";
import NewsLetter from "@/Components/NewsLetter";
import FlySelect from "@/Components/FlySelect";
import data from '../../../FlyLiboDB.json'
import { getOrigins } from "@/Libs/getOrigins";

const Inicio = () => {

  return (
    <Layout>
      <div className="page">
        <main className={styles.inicio}>
          <FlySelect destination={getOrigins(data)} origin={getOrigins(data)} />
          <LowPrices />
          <NewsLetter />
        </main>
      </div>
    </Layout>
  );
};

export default Inicio;
