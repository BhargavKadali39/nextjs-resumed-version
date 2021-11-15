import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  let arr = [1, 2, 3];
  for (let i = 0; i < 3; i++) {
    return (
      <div>
        hello world <p> {i} </p>{' '}
      </div>
    );
  }
}
