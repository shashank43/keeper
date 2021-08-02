import React from 'react';

function Footer() {
    let today = new Date();
    let yyyy = today.getFullYear();
    return (<footer>
        <p>&#169; {yyyy}</p>
    </footer>);
}

export default Footer;