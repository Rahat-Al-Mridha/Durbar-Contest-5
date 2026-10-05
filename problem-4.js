function getPageMetadata(totalItems, pageSize, currentPage) {
    const totalPages = Math.ceil(totalItems / pageSize);

    const startItem =
        totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;

    const endItem =
        totalItems === 0 ? 0 : Math.min(currentPage * pageSize, totalItems);

    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPages;

    return {
        totalPages,
        startItem,
        endItem,
        hasPrev,
        hasNext
    };
}

console.log(getPageMetadata(95, 10, 10))
console.log(getPageMetadata(24, 5, 3))