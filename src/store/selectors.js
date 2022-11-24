import { createSelector } from 'reselect';

export const selectEmployeeDetails = (state) => state?.employee?.employeeDetails || [];
export const selectSearchValue = (state) => state?.employee?.searchValue || '';
export const selectFilterValue = (state) => state?.employee?.filterValue || '';

// Employees to be displayed in left tree
export const selectEmployeeDetailsToDisplay = createSelector(selectEmployeeDetails, selectSearchValue, selectFilterValue,
  (employeeDetails, searchValue, filterValue) => {
    // filter employee if name or designation or team has search value
    const searchedEmployeeDetails = searchValue ? employeeDetails.filter(employee => 
      employee.name.toLowerCase().includes(searchValue)
      || employee.designation.toLowerCase().includes(searchValue)
      || employee.team.toLowerCase().includes(searchValue)) : employeeDetails;

    // filter employee based on team if filter value is present
    const filteredEmployeeDetails = filterValue ? searchedEmployeeDetails.filter(employee => employee.team.toLowerCase() === filterValue.toLowerCase()) : searchedEmployeeDetails;

    return filteredEmployeeDetails;
});

// Form a tree to display organization chart
export const selectEmployeeTree = createSelector(selectEmployeeDetails, selectFilterValue,
  (employeeDetailsPresent, filterValue) => {
    let root = {};
    if (employeeDetailsPresent) {
      let filteredEmployeeToDisplay = [];
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

      let employeeDetailsTree = filterValue ? filteredEmployeeToDisplay: employeeDetailsPresent;

      // since we are adding children to employee to generate tree, it would impact the global state, hence a deep clone is required
      employeeDetailsTree = JSON.parse(JSON.stringify(employeeDetailsTree));

      const idMapping = employeeDetailsTree.reduce((acc, employee, i) => {
        acc[employee.id] = i;
        return acc;
      }, {});

      // generate tree for organization chart
      employeeDetailsTree.forEach((employee) => {
        // Handle the root element
        if (employee.managerId === null) {
          root = employee;
          return;
        }
        // Use the mapping to locate the parent element in the data array
        const parentEl = employeeDetailsTree[idMapping[employee.managerId]];
        // Add current el to its parent's `children` array
        parentEl.children = [...(parentEl.children || []), employee];
      });
    }

    return root || {};
});
