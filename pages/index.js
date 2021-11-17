 import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  let arr = ['this', 'is', 'me'];
  return (
    <div>
      {arr.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
}
