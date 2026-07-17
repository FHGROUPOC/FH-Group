'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ElfsightWidget = dynamic(
  () =>
    Promise.resolve(() => (
      <>
        {/* <div className="cs_height_80 cs_height_lg_80"></div> */}
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <div
          className="elfsight-app-956ae19d-68e8-4e89-82d3-da88acc7902c"
          data-elfsight-app-lazy
        ></div>
      </>
    )),
  { ssr: false }
);

export default ElfsightWidget