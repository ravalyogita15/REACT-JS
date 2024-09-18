// // Theme.jsx
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { handleTheme } from '../store/action';


// const Theme = () => {
//   const dispatch = useDispatch();
//   const theme = useSelector((state) => state.theme.theme);

//   return (
//     <div>
//       <button 
//         disabled={theme === 'light'}
//         onClick={() => dispatch(handleTheme('light'))}
//       >
//         Switch to Light
//       </button>
//       <button 
//         disabled={theme === 'dark'}
//         onClick={() => dispatch(handleTheme('dark'))}
//       >
//         Switch to Dark
//       </button>
//     </div>
//   );
// };

// export default Theme;


// Theme.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleTheme } from '../store/action';


const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div style={{}}>
      <button 
        disabled={theme === 'light'}
        onClick={() => dispatch(handleTheme('light'))}
      >
        Switch to Light
      </button>
      <button 
        disabled={theme === 'dark'}
        onClick={() => dispatch(handleTheme('dark'))}
      >
        Switch to Dark
      </button>
    </div>
  );
};

export default Theme;
