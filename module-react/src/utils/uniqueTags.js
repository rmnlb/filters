export default (array) => {
    let filtersArr = new Set();
    array.forEach((item) => {
        item.tags.forEach((tag) => {
            filtersArr.add(tag);
        })
    });

    return Array.from(filtersArr).sort()
}