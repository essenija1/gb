//const getConnection = () => true;

import { SharedNetwork } from "./SharedNetworkData";

// export const Banner = () => {
//     const isConnected = getConnection();

//     if (isConnected) {
//         return null;
//     }

//     return <div />;
// };

// export const Warning = () => {
//     const isConnected = getConnection();

//     if (isConnected) {
//         return null;
//     }

//     return <span />;
// };

// export const ButtonWithNetwork = () => {
//     const isConnected = getConnection();

//     if (isConnected) {
//         return null;
//     }

//     return <button />;
// };

// export const SharedNetworkData = ({ render }) => {
//     const isConnected = getConnection();

//     return render(isConnected);
// };


export const Banner = () => {
    return (
    <SharedNetworkData
        render={(isConnected) => {
            if (!isConnected) {
                return null;
            }
            return <div />
        }}
    />
    );
};


// export const ButtonWithNetwork = () => {
//     return (
//         <SharedNetworkData 
//         render={(isConnected) => {
//             if (!isConnected) {
//                 return <button disabled={true}>Not connected</button>;
//             }

//             return <button>Press me</button>;

//         }}
//         />
//     );
// };