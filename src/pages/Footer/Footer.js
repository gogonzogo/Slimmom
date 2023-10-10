import FooterAcct from '../../components/FooterAcct/FooterAcct';
import { useAuth } from '../../hooks/useAuth';

function Footer() {
  const { loggedIn } = useAuth();

    return (
      <>
      { loggedIn ? 
      <FooterAcct /> : null }
    </>
    )
}


export default Footer;
