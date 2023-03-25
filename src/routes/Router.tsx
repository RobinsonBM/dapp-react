import { Route, Routes } from 'react-router';
import UserHome from '../components/UserHome';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<UserHome />} />
            </Routes>
        </>
    );
};

export default Router;
