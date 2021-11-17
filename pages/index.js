import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Field from '../components/Limp';

export default function Home() {
  return (
    <div>
      <Field a="1" b="2" c="3" />
      <Field a="4" b="5" c="6" />
      <Field a="7" b="8" c="9" />
    </div>
  );
}
