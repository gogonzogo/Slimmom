import { useLocation } from 'react-router-dom';
import ArchiveByDate from '../../components/Archive/ArchiveByDate';
import Container from 'components/Container/Container'


function Archive() {
    const location = useLocation();
    const archivesData = location.state;
    return (
        <div className="background mainBackground">
            <section className="top-bottom">
                <Container className="left-right">
                    <ArchiveByDate archivesData={archivesData} />
                </Container>
            </section>
        </div>
    )
}

export default Archive;