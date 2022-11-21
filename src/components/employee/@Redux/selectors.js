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
