import React, { useState, useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import "../styles/style.css";

// class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Contact</h2>
//       </div>
//     );
//   }
// }

const Contact = () => {
  const params = useParams();
  const [userID, setUserID] = useState(params.id);
  return (
    <div className="Test">
      <h2>Contact?</h2>
      <h2>{userID}</h2>
    </div>
  );
};

export default Contact;
