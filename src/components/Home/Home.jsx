
// import PropTypes from 'prop-types';

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo);
    return (
        <div>

        </div>
    );
};

Home.propTypes = {

};

export default Home;