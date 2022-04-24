import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from "../store/store";
import {
  getLayoutState,
} from "../store/slices/layoutSlice";

const Home: NextPage = () => {

  const { jsonData, sections } = useSelector(getLayoutState);
  return (
    <><Layout jsonData={jsonData} sections={sections}/></>
  )
}

export default Home
