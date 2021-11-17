import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Field from '../components/Limp';

export default function Home() {
  return (
    <div>
      <Field a="1" b="2" c="3" />
    </div>
  );
}
