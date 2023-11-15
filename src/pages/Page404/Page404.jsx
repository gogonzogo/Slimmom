import style from './Page404.module.css';
import Container from 'components/Container/Container';
import CustomButton from 'components/CustomButton/CustomButton';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const Page404 = () => {
    const { loggedIn } = useAuth();

    const nav = useNavigate(); // react router hook

    const returnHome = async () => {
        if (!loggedIn) {
            nav('/Home')
        } else {
            nav('/diary')
        }

    }

    return (

        <div className="background mainBackground">
            <section className="top-bottom">
                <Container className="left-right">
                    <div className={style.page}>
                        <div>
                            <h1 className={style.header}> 404</h1>
                        </div>
                        <div>
                            <h3 className={style.notfounfHeader}> Page not found!</h3>
                            <p className={style.notfoundText}> The page you are trying to access does not exist on this server.</p>
                            <p className={style.notfoundreasons}>Possible reasons</p>
                            <ul className={style.notfoundList}>
                                <li className={style.notfoundListItem}> The page may have been moved or deleted</li>
                                <li className={style.notfoundListItem}>You may have used an outdated or broken link</li>
                                <li className={style.notfoundListItem}>You may have typed the address (URL)  incorrectly</li>

                            </ul>
                            <CustomButton
                                color="orange"
                                size="wide"
                                onClick={returnHome}
                            >
                                Return to Homepage
                            </CustomButton>

                        </div>
                    </div>
                </Container>
            </section>
        </div>

    )
}

export default Page404;
