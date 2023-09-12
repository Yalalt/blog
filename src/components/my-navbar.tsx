import { Navbar, Nav } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <Navbar className='fj-navbar fj-nav-base' bg='transparent' expand='lg'>
      <Navbar.Brand href='#home' className='fj-navbar-brand'>
        <a href='#'>Аялалын блог</a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Navbar className='ml-auto'>
          <Nav.Link className='fj-navbar-item fj-navbar-link' href='/'>
            Нүүр
          </Nav.Link>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
};
