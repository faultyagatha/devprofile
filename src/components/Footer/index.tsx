import React from 'react';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-front mt-16 pt-8 pb-16">
      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex items-center">
        <div className="w-2/3 text-back-light font-header text-xs">
          <b>
            &copy; {new Date().getFullYear()} Valeria Barvinska.
        </b>{" "}
        All rights reserved.
      </div>
      </div>
    </footer>
  )
}

export default Footer
