import { createSelector } from 'reselect';

export const selectEmployeeDetails = (state) => state?.employee?.employeeDetails || [];
export const selectSearchValue = (state) => state?.employee?.searchValue || '';
export const selectFilterValue = (state) => state?.employee?.filterValue || '';

export const selectEmployeeDetailsToDisplay = createSelector(selectEmployeeDetails, selectSearchValue, selectFilterValue,
  (employeeDetails, searchValue, filterValue) => {
    const searchedEmployeeDetails = searchValue ? employeeDetails.filter(employee => 
      employee.name.toLowerCase().includes(searchValue) || employee.designation.toLowerCase().includes(searchValue) || employee.team.toLowerCase().includes(searchValue)) : employeeDetails;
    const filteredEmployeDetails = filterValue ? searchedEmployeeDetails.filter(employee => employee.team.toLowerCase() === filterValue.toLowerCase()) : searchedEmployeeDetails;
    return filteredEmployeDetails;
});

export const selectEmployeeTree = createSelector(selectEmployeeDetails,
  (employeeDetailsToDisplay) => {
    let root = {};
    if (employeeDetailsToDisplay) {
      const idMapping = employeeDetailsToDisplay.reduce((acc, el, i) => {
        acc[el.id] = i;
        return acc;
      }, {});
      employeeDetailsToDisplay.forEach((el) => {
        // Handle the root element
        if (el.managerId === null) {
          root = el;
          return;
        }
        // Use our mapping to locate the parent element in our data array
        const parentEl = employeeDetailsToDisplay[idMapping[el.managerId]];
        // Add our current el to its parent's `children` array
        parentEl.children = [...(parentEl.children || []), el];
      });
    }
    return root || {};
});
