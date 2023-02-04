
import Image from 'next/image'
import styles from '../../styles/Home.module.css';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <div className={styles.description}>
          <p>
            CONTACT  ed by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="/about"
              rel="noopener noreferrer"
            >
              Regresar al Home{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
    </MainLayout>
  )
}
