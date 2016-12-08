import React from 'react';
import AppBar from 'material-ui/AppBar';

const Main = (props) => (
    <div>
        <AppBar
            title="Github Finder"
            showMenuIconButton={false}
        />
        <div>
            {props.children}
        </div>
    </div>
);

//属性限制为React.PropTypes.object
Main.propTypes = {
    children: React.PropTypes.object,
};

export default Main;
