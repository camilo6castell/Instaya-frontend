import React, { useState, useEffect } from "react";

const Clock = () => {
  const [hora, setHora] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let interval;
    if (visible) {
      interval = setInterval(
        () => setHora(new Date().toLocaleTimeString()),
        1000
      );
    } else {
      clearInterval(interval);
      setHora(null);
    }
    // return () => {

    //   setHora("");
    // };
  }, [visible]);

  // useEffect(() => {
  //   let interval;
  //   if (visible) {
  //     interval = setInterval(
  //       () => setHora(new Date().toLocaleTimeString()),
  //       1000
  //     );
  //   } else {
  //     clearInterval(interval);
  //     setHora("");
  //   }
  //   return () => {
  //     clearInterval(interval);
  //     setHora("");
  //   };
  // }, [visible]);

  return (
    <div className="clock" onClick={() => setVisible(!visible)}>
      {visible ? <span>{hora}</span> : <span>See the time</span>}
    </div>
  );
};

export { Clock };
