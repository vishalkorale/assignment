import React from 'react';
import '../Invitaion.css'; // Import CSS file for styling
import { WiDayCloudy } from "react-icons/wi";

const Invitation = () => {
  // Get today's date
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get current time
  const formattedTime = today.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    // <div className="invitation">
    //   <div className="logo">
    //     {/* Place your logo image here */}
    //     <img src="/logo.png" alt="Logo" />
    //     <p>Partly Cloud</p>
    //   </div>
    //   <div className="details">
    //     <div>
    //     <p className="date">{formattedDate}</p>
    //     <p className="today">Today</p>
    //     </div>

    //     <div>
    //       <img src="/running-man.png" alt="Running man" />
    //     <p className="present-on-time">
    //       Present on time
    //     </p>
    //     </div>

    //     <div>
    //     <p className="entry-time">
    //       {/* sss */}
    //       Entry Time: {formattedTime}
    //     </p>
    //     </div>
    //   </div>
    // </div>
    <div className="invitation">
  <div className="logo">
    {/* Place your logo image here */}
    <WiDayCloudy size={50}   color='whites'/>
    <p>Partly Cloud</p>
  </div>
  {/* Vertical dotted line */}
  <div className="line"></div>

  <div className="details">
    <div className='firstDiv'>
      <p className="date">{formattedDate}</p>
      <p className="today">Today</p>
    </div>
    <div className='secondDiv'>
      <img src="/running-man.png" alt="Running man" />
      <p className="present-on-time">
        Present on time
      </p>
    </div>
    <div>
      <p className="entry-time">
        {/* sss */}
        Entry Time
        <p> {formattedTime}</p>
      </p>
    </div>
  </div>
</div>

  );
};

export default Invitation;
