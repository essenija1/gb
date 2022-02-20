import { useContext } from 'react';
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
import { changeShowName, CHANGE_NAME, changeName } from "../../store/profile/actions";
import { ThemeContext } from '../../utils/ThemeContext';
import { Form } from '../Form';
import { selectName } from '../store/profile/selectors';

export const Profile = () => {
    const { setMessageColor } = useContext(ThemeContext);
    
    const dispatch = useDispatch();
    //const { showName, name } = useSelector((state) => state);
    const showName = useSelector(selectShowName, shallowEqual);
    const name = useSelector(selectName);

    // const prevShowName = usePrev(showName);

    // console.log(prevShowName, showName);

   
    const handleChangeShowName = () => {
        dispatch(changeShowName);
    };  
    const handleClick = () => {
        setMessageColor(prevColor => (prevColor === 'red' ? 'yellow' : 'red'));
    };
    const handleChangeName = (text) => {
        dispatch(changeName(text));
    },

    const prevShowName = usePrev(showName);

    console.log(prevShowName, showName);

   return (
       <>
         <h3>Profile</h3>
         <div>
         <button onClick={handleClick}>Change theme</button>
         </div>
         <div>
             {showName && <span>{name}</span>}
             <input type="checkbox" />
         <button onClick={handleChangeShowName}>Change show name</button>
         </div>
         <Form onSubmit={handleChangeName} />
       </>
   );
};

export const ProfileToConnect = ({ showName, name, setName, serShowName }) => {
    const { setMessageColor } = useContext(ThemeContext);

    const handleChangeShowName = () => {
        //dispatch(changeShowName);
        setShowName();
    };  

    const handleClick = () => {
        setMessageColor(prevColor => (prevColor === 'red' ? 'yellow' : 'red'));
    };

    const handleChangeName = (text) => {
        //dispatch(changeName(text));
        setName(text);
    };

   return (
       <>
         <h3>Profile</h3>
         <div>
         <button onClick={handleClick}>Change theme</button>
         </div>
         <div>
             {showName && <span>{name}</span>}
             <input type="checkbox" />
         <button onClick={handleChangeShowName}>Change show name</button>
         </div>
         <Form onSubmit={handleChangeName} />
       </>
   );
};


const mapStateToProps = (state) => ({
    showName: selectShowName(state),
    name: selectName(state),
});

const mapDispatchToProps = {
    setShowName: () => changeShowName,
    setName: changeName,
};

const ConnectedProfile = connect(
    mapStateToProps, 
    mapDispatchToProps
    )(ProfileToConnect);
export default ConnectedProfile;