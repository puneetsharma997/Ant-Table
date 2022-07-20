

export const handleSort = (e, oldData, setData, attribute) => {
    if (e.key === '1') {
        setData([...oldData.sort((a, b) => (a[attribute] > b[attribute]) ? 1 : ((b[attribute] > a[attribute]) ? -1 : 0))])
    }
    else if (e.key === '2') {
        setData([...oldData.sort((a, b) => (a[attribute] < b[attribute]) ? 1 : ((b[attribute] < a[attribute]) ? -1 : 0))])
    }
}

