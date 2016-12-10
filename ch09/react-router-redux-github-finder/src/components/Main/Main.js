import React from 'react';
// 引入 AppBar
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

// 进行 propTypes 验证
Main.propTypes = {
  children: React.PropTypes.object,
};

export default Main;
