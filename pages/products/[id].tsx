import { useRouter } from 'next/router';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // 예시용 더미 데이터
  const product = {
    id,
    name: 'Heart Drop Earrings',
    description: 'Elegant heart-shaped earrings with cubic zirconia.',
    price: 19.99,
    image: '/images/sample-earring.jpg', // public/images 폴더에 파일 존재해야 함
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ maxWidth: '300px' }} />
      <p style={{ fontSize: '18px', margin: '20px 0' }}>{product.description}</p>
      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>${product.price.toFixed(2)}</p>
      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        장바구니에 담기
      </button>
    </div>
  );
}
