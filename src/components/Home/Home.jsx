

// import PropTypes from 'prop-types';

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext)
    return (
        <div>
            {authInfo.name}
        </div>
    );
};

Home.propTypes = {

};

export default Home;