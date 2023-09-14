import { createContext } from "react";

export const MyContext = createContext("");

// import React from "react";
// import { createContext } from "react";
// const [unlikelyColor, setUnlikeyColor] = React.useState("#FF6384");
// const [neutralColor, setNeutralColor] = React.useState("#88DD81");
// const [likelyColor, setLikeyColor] = React.useState("#ffce56");
// const AppContext = createContext("");
// function MyContext({ children }) {
//   return (
//     <AppContext.Provider
//       value={{
//         unlikelyColor,
//         setUnlikeyColor,
//         neutralColor,
//         setNeutralColor,
//         likelyColor,
//         setLikeyColor,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// }

// export { AppContext, MyContext };
