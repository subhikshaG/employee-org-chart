const initialState = {
  employeeDetails: [],
};

export const employee = (state = initialState, action) => {
  switch (action.type) {
    case 'EMPLOYEE_DETAILS_SUCCESS': {
      return {
        ...state,
        employeeDetails: action.employeeDetails,
      };
    }
    case 'UPDATE_SEARCH': {
      return {
        ...state,
        searchValue: action.searchVal,
      }
    }
    case 'UPDATE_FILTER': {
      return {
        ...state,
        filterValue: action.filterValue,
      }
    }
    default:
      return state;
  }
};
