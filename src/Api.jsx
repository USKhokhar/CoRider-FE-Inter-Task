// import React, { useEffect, useState } from 'react';

const baseApi = 'https://3.111.128.67/assignment/chat?page='

export const fetchData = async ({setData}) => {
  try {
    const response = await fetch(`${baseApi}0`);
    const jsonData = await response.json();
    setData(jsonData);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};


// const MyComponent = () => {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetchData();
  // }, []);

//   return (
//     <div>
//         <fieldset>
//             <legend>API Data</legend>
            
//             {data ? (
//                 <pre>{JSON.stringify(data.chats, null, 2)}</pre>
//             ) : (
//                 <p>Loading data...</p>
//             )}
//         </fieldset>
//     </div>
//   );
// };

// export default MyComponent;
