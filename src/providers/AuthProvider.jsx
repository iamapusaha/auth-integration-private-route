
import PropTypes from 'prop-types';
import { createContext } from 'react';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const authInfo = { name: 'go to hat okay!' }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;