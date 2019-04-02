const filters = {
    searchText: '',
    hideCompletedTasks: false,
    categoryDisplay: 'all'
}

const getFilters = () => filters;

const setFilters = ({ searchText, hideCompletedTasks, categoryDisplay }) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText;
    }

    if (typeof hideCompletedTasks === 'boolean') {
        filters.hideCompletedTasks = hideCompletedTasks;
    }

    if (categoryDisplay === 'all' || 
        categoryDisplay === 'professional' || categoryDisplay ==='personal') {
            filters.categoryDisplay = categoryDisplay;
        }
}

export { getFilters, setFilters };