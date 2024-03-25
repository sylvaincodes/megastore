import React, { Fragment, useEffect } from 'react'

export const ScrollToTop = () => {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, []);

  return (
    <Fragment>
        
    </Fragment>

  )
}
