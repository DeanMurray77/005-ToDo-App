const filters = {
    searchText: '',
    hideCompletedTasks: false,
    categoryDisplay: 'all'
}

const getFilters = () => filters;

const setFilters = (update) => {
    if (typeof update.searchText === 'string') {
        filters.searchText = update.searchText;
    }

    if (typeof update.hideCompletedTasks === 'boolean') {
        filters.hideCompletedTasks = update.hideCompletedTasks;
    }

    if (update.categoryDisplay === 'all' || 
        update.categoryDisplay === 'professional' || update.categoryDisplay ==='personal') {
            filters.categoryDisplay = update.categoryDisplay;
        }
}

export { getFilters, setFilters };