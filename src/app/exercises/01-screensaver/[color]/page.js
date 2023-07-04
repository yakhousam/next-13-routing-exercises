import React from "react";

import ScreenSaver from "../../../../components/ScreenSaver";

function ScreenSaverPage({ params }) {
  const { color } = params;
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={color} />
    </main>
  );
}

export default ScreenSaverPage;
