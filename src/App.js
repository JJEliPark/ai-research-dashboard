import React, { useState, useEffect } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Area from "./scenes/area";
import Bump from "./scenes/bump";
import Chord from "./scenes/chord";
import Bubble from "./scenes/bubble";
import Network from "./scenes/network";
import Geography from "./scenes/geography";
// import Contacts from "./scenes/contacts";
// import Invoices from "./scenes/invoice";
// import Form from "./scenes/form";
// import Calendar from "./scenes/calendar";
// import FAQ from "./scenes/faq";
// import Bar from "./scenes/bar";
// import Pie from "./scenes/pie";
// import Line from "./scenes/line";
// import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/area" element={<Area />} />
              <Route path="/chord" element={<Chord />} />
              <Route path="/bump" element={<Bump />} />
              <Route path="/bubble" element={<Bubble />} />
              <Route path="/network" element={<Network />} />
              <Route path="/geography" element={<Geography />} />
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

// function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("/members")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         console.log(data);
//       });
//   }, []);

//   return (
//     <div>
//       {typeof data.members === "undefined" ? (
//         <p>Loading...</p>
//       ) : (
//         data.members.map((member, i) => <p key={i}>{member}</p>)
//       )}
//     </div>
//   );
// }

// export default App;
