import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import MyNavbar from '@/components/my-navbar';

export default function Home() {
  return (
    <>
      <Container>
        <MyNavbar />
        <div className='blog-detail-page'>
          <Row>
            <Col md='8'>
              <div className='mb-4 admin-intro'>
                <Image roundedCircle width={64} height={64} className='mr-3' src='logo.png' alt='Generic placeholder' />
                <div>
                  <h5 className='font-weight-bold mb-0'>Tour.mn - Аялалын блог</h5>
                  <p className='welcome-text'>
                    Бид аялалын технологийн чиглэлээр төрөл бүрийн сонирхолтой мэдээллүүдийг энэхүү блог дээр хүргэж
                    байна.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <hr />

          <div className={`page-wrapper`}>
            <Row className='mb-5'>
              <Col md='10'>
                <Card className={`fj-card fj-card-list`}>
                  <div className='card-body-wrapper'>
                    <Card.Header className='d-flex flex-row'>
                      <Image
                        src={'https://source.unsplash.com/user/erondu/150x150'}
                        className='rounded-circle mr-3'
                        height='50px'
                        width='50px'
                        alt='avatar'
                      />
                      <div>
                        <Card.Title className='font-weight-bold mb-1'>Амар Өсөхбаяр</Card.Title>
                        <Card.Text className='card-date'>2023 оны 9 сарын 20</Card.Text>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title className='card-main-title'>Хэрхэн аялалдаа бэлтгэх вэ?</Card.Title>
                      <Card.Text>Аялалдаа бэлтгэх талаарх мэдээлэл</Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>

              <Col md='4'>
                <Card className={`fj-card`}>
                  <div className='card-body-wrapper'>
                    <Card.Header className='d-flex flex-row'>
                      <Image
                        src='https://source.unsplash.com/user/erondu/150x150'
                        className='rounded-circle mr-3'
                        height={50}
                        width={50}
                        alt='avatar'
                      />
                      <div>
                        <Card.Title className='font-weight-bold mb-1'>Амар Өсөхбаяр</Card.Title>
                        <Card.Text className='card-date'>2023 оны 9 сарын 20</Card.Text>
                      </div>
                    </Card.Header>
                    <div className='view overlay'>
                      <Card.Img src={'https://source.unsplash.com/user/erondu/250x250'} alt='Card image cap' />
                    </div>
                    <Card.Body>
                      <Card.Title className='card-main-title'>Хэрхэн аялалдаа бэлтгэх вэ?</Card.Title>
                      <Card.Text>Аялалдаа хэрхэн амжилттай зардал бага аялах вэ</Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>

              <Col md='4'>
                <Card className={`fj-card`}>
                  <div className='card-body-wrapper'>
                    <Card.Header className='d-flex flex-row'>
                      <Image
                        src='https://source.unsplash.com/user/erondu/150x150'
                        className='rounded-circle mr-3'
                        height={50}
                        width={50}
                        alt='avatar'
                      />
                      <div>
                        <Card.Title className='font-weight-bold mb-1'>Амар Өсөхбаяр</Card.Title>
                        <Card.Text className='card-date'>2023 оны 9 сарын 20</Card.Text>
                      </div>
                    </Card.Header>
                    <div className='view overlay'>
                      <Card.Img src={'https://source.unsplash.com/user/erondu/250x250'} alt='Card image cap' />
                    </div>
                    <Card.Body>
                      <Card.Title className='card-main-title'>Хэрхэн аялалдаа бэлтгэх вэ?</Card.Title>
                      <Card.Text>Аялалдаа хэрхэн амжилттай зардал бага аялах вэ</Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>

              <Col md='4'>
                <Card className={`fj-card`}>
                  <div className='card-body-wrapper'>
                    <Card.Header className='d-flex flex-row'>
                      <Image
                        src='https://source.unsplash.com/user/erondu/150x150'
                        className='rounded-circle mr-3'
                        height={50}
                        width={50}
                        alt='avatar'
                      />
                      <div>
                        <Card.Title className='font-weight-bold mb-1'>Амар Өсөхбаяр</Card.Title>
                        <Card.Text className='card-date'>2023 оны 9 сарын 20</Card.Text>
                      </div>
                    </Card.Header>
                    <div className='view overlay'>
                      <Card.Img src={'https://source.unsplash.com/user/erondu/250x250'} alt='Card image cap' />
                    </div>
                    <Card.Body>
                      <Card.Title className='card-main-title'>Хэрхэн аялалдаа бэлтгэх вэ?</Card.Title>
                      <Card.Text>Аялалдаа хэрхэн амжилттай зардал бага аялах вэ</Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <footer className='page-footer'>
          <div>
            <a href='#'>Discord</a>
            {' | '}
            <a href='#'>github</a>
            {' | '}
            <a href='#'>facebook</a>
          </div>
        </footer>
      </Container>
    </>
  );
}
