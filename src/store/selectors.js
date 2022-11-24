import { createSelector } from 'reselect';

export const selectEmployeeDetails = (state) => state?.employee?.employeeDetails || [];
export const selectSearchValue = (state) => state?.employee?.searchValue || '';
export const selectFilterValue = (state) => state?.employee?.filterValue || '';

// Employees to be displayed in left tree
export const selectEmployeeDetailsToDisplay = createSelector(selectEmployeeDetails, selectSearchValue, selectFilterValue,
  (employeeDetails, searchValue, filterValue) => {
    const searchedEmployeeDetails = searchValue ? employeeDetails.filter(employee => 
      employee.name.toLowerCase().includes(searchValue) || employee.designation.toLowerCase().includes(searchValue) || employee.team.toLowerCase().includes(searchValue)) : employeeDetails;
    const filteredEmployeeDetails = filterValue ? searchedEmployeeDetails.filter(employee => employee.team.toLowerCase() === filterValue.toLowerCase()) : searchedEmployeeDetails;
    return filteredEmployeeDetails;
});

// Form a tree to display organization chart
export const selectEmployeeTree = createSelector(selectEmployeeDetails, selectFilterValue,
  (employeeDetailsPresent, filterValue) => {
    let root = {};
    if (employeeDetailsPresent) {
      let filteredEmployeeToDisplay = [];
      employeeDetailsPresent.forEach((el) => {
        if (el.children) {
          delete el.children;
        } 
      });
    if (filterValue) {
      const filteredEmployeeDetails = employeeDetailsPresent.filter(employee => employee.team.toLowerCase() === filterValue.toLowerCase());
      
      // show only chart for specific employees base on team
      filteredEmployeeDetails.forEach(filterEmployee => {
        let managerId = filterEmployee.managerId;
        const isEmployeePresent = filteredEmployeeToDisplay.some(emp => {
          return  emp.id === filterEmployee.id;
        });
        if (!isEmployeePresent) {
          filteredEmployeeToDisplay.push(filterEmployee);
        }
        while (managerId !== null) {
          const employeeFound = employeeDetailsPresent.find(emp => emp.id === managerId);
          const isEmployeePresentInFilterArray = filteredEmployeeToDisplay.some(emp => emp.id === employeeFound.id);
          if (!isEmployeePresentInFilterArray) {
            filteredEmployeeToDisplay.push(employeeFound);
          }
          managerId = employeeFound.managerId;
        }
      });
    }

    const employeeDetailsTree = filterValue ? filteredEmployeeToDisplay: employeeDetailsPresent; 
      const idMapping = employeeDetailsTree.reduce((acc, el, i) => {
        acc[el.id] = i;
        return acc;
      }, {});
      employeeDetailsTree.forEach((el) => {
        // Handle the root element
        if (el.managerId === null) {
          root = el;
          return;
        }
        // Use the mapping to locate the parent element in the data array
        const parentEl = employeeDetailsTree[idMapping[el.managerId]];
        // Add current el to its parent's `children` array
        parentEl.children = [...(parentEl.children || []), el];
      });
    }
    return root || {};
});
