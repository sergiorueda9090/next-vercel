import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';


export default function HomePage() {
  return (
    <MainLayout> 
      <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <Link href="/about">
                By{' '}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={100}
                  height={24}
                  priority
                />
              </Link>
          </div>
      </div>
    </MainLayout>
  )
}
