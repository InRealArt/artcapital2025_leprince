import Image from 'next/image';
import styles from './ImageGrid.module.scss';

export default function ImageGrid() {
  const images = [
    'nleprince1.jpg',
    'nleprince2.jpg',
    'nleprince3.jpg',
    'nleprince4.jpg',
    'nleprince5.jpg',
    'nleprince6.jpg',
  ];

  return (
    <div className={styles.grid}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image
            src={`/img/heroSection/${image}`}
            alt={`Œuvre d'art de Nadine Le Prince - Collection 2025 - Pièce ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}