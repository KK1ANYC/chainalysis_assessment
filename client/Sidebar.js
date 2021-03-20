import React from 'react';

const Sidebar = (props) => {
  const { albums } = props;
  // Might not need props

  return (
    <div id='sidebar'>
      <img src='juke.svg' id='logo' />
      <section>
        <h4>
          <a>ALBUMS</a>
        </h4>
      </section>
  </div>
  );
};

export default Sidebar;
