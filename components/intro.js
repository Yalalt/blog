import { Media, Image } from 'react-bootstrap';

const Intro = () => (
    <Media className='mb-4 admin-intro'>
      <Image roundedCircle width={64} height={64} className='mr-3' src='logo.png' alt='Generic placeholder' />
      <Media.Body>
        <h5 className='font-weight-bold mb-0'>Tourist Advice - Аялагчдын сургалтын платформ</h5>
        <p className='welcome-text'>
          Бид аялалын технологийн чиглэлээр төрөл бүрийн сонирхолтой мэдээллүүдийг энэхүү блогоор хүргэж байна.
        </p>
      </Media.Body>
    </Media>
  );
export default Intro;
