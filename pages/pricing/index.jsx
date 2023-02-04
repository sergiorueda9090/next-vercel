import Image from 'next/image'
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';
import { DarkLayout } from '../../components/layouts/DarkLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      <DarkLayout>
        <div className={styles.description}>
            <p>
              pricing&nbsp;
              <code className={styles.code}>pages/index.js</code>
            </p>
            <div>
            <Link href="/">
                Regresar al Home{' '}
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
      </DarkLayout>
    </MainLayout>
  )
}
