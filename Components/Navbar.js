// Components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: '#0e0b1a',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 'bold',
    },
    logoImage: {
      height: '24px',
      marginRight: '0.5rem',
    },
    navLinks: {
      listStyle: 'none',
      display: 'flex',
      gap: '1.5rem',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
    },
    loginButton: {
      backgroundColor: '#6c63ff',
      color: 'white',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img src="/logo.png" alt="Code & Debug Logo" style={styles.logoImage} /> {/* Replace with your logo path */}
        <span>CODE & DEBUG</span>
      </div>
      <ul style={styles.navLinks}>
        <li><Link href="/courses" style={styles.link}>Courses</Link></li>
        <li><Link href="/about" style={styles.link}>About</Link></li>
        <li><Link href="/testimonials" style={styles.link}>Testimonials</Link></li>
        <li><Link href="/contact" style={styles.link}>Contact</Link></li>
      </ul>
      <button style={styles.loginButton}>LOGIN</button>
    </nav>
  );
};

export default Navbar;
