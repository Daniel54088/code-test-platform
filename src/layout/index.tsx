import React from "react";

import ResponsiveAppBar from "../components/public/ResponsiveAppBar";

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <div style={{backgroundColor: '#080045'}}>
        <ResponsiveAppBar />
      </div>
      
      <div>{children}</div>
    </React.Fragment>
  );
};

export default Layout;
