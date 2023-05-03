export const Pagination: React.FC<{currentPage: number,
     totalPages: number,
      paginate: any}> = (props) => {

        //  using to display the pagenumbers at the end
        const pageNumbers = [];


        // Check if the current page is the first page
        if (props.currentPage === 1 ) {
            // Push the current page into the array
            pageNumbers.push(props.currentPage);
        
            // Check if the next two pages exist and push them along with the first page
            if (props.totalPages >= props.currentPage + 1) {
                pageNumbers.push(props.currentPage + 1);
            }
            if (props.totalPages >= props.currentPage + 2) {
                pageNumbers.push(props.currentPage + 2);
            }
        
        // If the current page is not the first page
        } else if (props.currentPage > 1) {
        
            // Check if the page number is greater than or equal to 3
            // If it is, push the previous two pages into the array
            if (props.currentPage >= 3 ) {
                pageNumbers.push(props.currentPage - 2);
                pageNumbers.push(props.currentPage - 1);
        
            // If the current page number is 2, push the first page into the array
            } else {
                pageNumbers.push(props.currentPage - 1);
            }
        
            // Push the current page into the array
            pageNumbers.push(props.currentPage);
        
            // Check if the next two pages exist and push them
            if (props.totalPages >= props.currentPage + 1) {
                pageNumbers.push(props.currentPage + 1);
            }
            if (props.totalPages >= props.currentPage + 2) {
                pageNumbers.push(props.currentPage + 2);
            }
        }
        

        return (
            <nav aria-label="...">
                <ul className='pagination'>
                    {/* first page */}
                    <li className='page-item' onClick={() => props.paginate(1)}>
                        <button className='page-link'>
                            First Page
                        </button>
                    </li>
                    {/* rendering all the middle pages */}
                    {pageNumbers.map(number => (
                        <li key={number} onClick={() => props.paginate(number)} 
                            className={'page-item ' + (props.currentPage === number ? 'active' : '')}>
                                <button className='page-link'>
                                    {number}
                                </button>
                        </li>
                    ))}
                    {/* last page */}
                    <li className='page-item' onClick={() => props.paginate(props.totalPages)}>
                        <button className='page-link'>
                            Last Page
                        </button>
                    </li>
                </ul>
            </nav>
        );
      }