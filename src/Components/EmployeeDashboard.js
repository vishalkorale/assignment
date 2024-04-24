// import React, { useState } from 'react';
// import '../employeeDashboard.css';

// const EmployeeDashboard = () => {
//   // Sample data (replace with your actual data)
//   const [employees, setEmployees] = useState([
//     {
//       id: 1,
//       type: 'New Employees ',
//       Emloyees: '18',
//       trainingHistory: 'Last Month',
//     },
//     {
//       id: 2,
//       type: 'Total Employees',
//       Employees: 50,
//       trainingHistory: 'Last Month',
//     },
//     {
//       id: 3,
//       type: 'Total Employees',
//       Employees: 15,
//       trainingHistory: 'Last Month',
//     },
//     {
//       id: 4,
//       type: 'Average Employees',
//       Employees: 10,
//       trainingHistory: 'Last Month'
//     },
//     // Add more employee data here
//   ]);

//   // Function to filter employee training history for the last month
//   const filterTrainingHistory = (employee) => {
//     // Assuming the training history is stored as date strings
//     const today = new Date();
//     const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
//     return employee.trainingHistory.filter(trainingDate => new Date(trainingDate) >= lastMonth);
//   };

//   // Function to calculate the average number of employees
//   const calculateAverageEmployees = () => {
//     return employees.length;
//     // You might need more complex logic depending on your requirements
//   };

//   // Function to scroll containers horizontally
//   const scrollContainers = (direction) => {
//     // Logic to scroll horizontally
//   };

//   return (
//     <div className="employee-dashboard">
//       <div className="container-wrapper">
//         {employees.map(employee => (
//           <div className="container" key={employee.id}>
//             <h2>{employee.type}</h2>
//             {/* <p>New: {employee.isNew ? 'Yes' : 'No'}</p> */}
//             <p>New: {employee.Emloyees}</p>
//             <p>Training History:</p>
//             <ul>
//               {filterTrainingHistory(employee).map((training, index) => (
//                 <li key={index}>{training}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Navigation arrows for scrolling horizontally */}
//       <button className="scroll-arrow prev" onClick={() => scrollContainers('prev')}>Previous</button>
//       <button className="scroll-arrow next" onClick={() => scrollContainers('next')}>Next</button>
//     </div>
//   );
// };

// export default EmployeeDashboard;


import React, { useState } from 'react';
import '../employeeDashboard.css';

const EmployeeDashboard = () => {
  // Sample data (replace with your actual data)
  const [employees, setEmployees] = useState([
    {
      id: 1,
      type: 'New Employees',
      Employees: 18,
      trainingHistory: 'Last Month',
    },
    {
      id: 2,
      type: 'Total Employees',
      Employees: 50,
      trainingHistory: 'Last Month',
    },
    {
      id: 3,
      type: 'Total Employees',
      Employees: 15,
      trainingHistory: 'Last Month',
    },
    {
      id: 4,
      type: 'Average Employees',
      Employees: 10,
      trainingHistory: 'Last Month'
    },
    // Add more employee data here
  ]);

  // Function to filter employee training history for the last month
  const filterTrainingHistory = (employee) => {
    // Assuming the training history is stored as date strings
    const today = new Date();
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    return employee.trainingHistory === 'Last Month' ;
  };

  // Function to scroll containers horizontally
  const scrollContainers = (direction) => {
    // Logic to scroll horizontally
  };

  return (
    <>
    <h1 className='dashboard'>Dashboard</h1>
    <div className="employee-dashboard">
      <div className="container-wrapper"> 
        {employees.map(employee => (
          <div className="container" key={employee.id}>
            <h2>{employee.type}</h2>
            <p className='number'>{employee.Employees}</p>
            <p>{employee.trainingHistory}</p>
            
          </div>
        ))}
        
      </div>
    
    </div>
    </>
  );
};

export default EmployeeDashboard;
