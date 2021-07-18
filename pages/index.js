// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import HeroSlider from '../components/HeroSlider/HeroSlider';
import ShopCategories from "../components/ShopCategories/ShopCategories.container";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ShopCategories />
    </>
  )
}