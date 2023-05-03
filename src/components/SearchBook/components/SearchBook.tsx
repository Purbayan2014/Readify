import BookModel from "../../../models/BookModel"
import { image1, image2 } from "../../../Images";

export const SearchBook: React.FC<{ book: BookModel }> = (props) => {
    return (
        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
            <div className='row g-0'>
                <div className='col-md-2'>
                    {/* image component for desktops and laptops */}
                    <div className='d-none d-lg-block'>
                        {props.book.img ?
                            <img src={props.book.img}
                                width='123'
                                height='196'
                                alt='Book'
                            />
                            :
                            <img src={image1}
                                width='123'
                                height='196'
                                alt='Book'
                            />
                        }
                    </div>
                    {/* image component for mobile  */}
                    <div className='d-lg-none d-flex justify-content-center 
                        align-items-center'>
                        {props.book.img ?
                            <img src={props.book.img}
                                width='123'
                                height='196'
                                alt='Book'
                            />
                            :
                            <img src={image2}
                                width='123'
                                height='196'
                                alt='Book'
                            />
                        }
                    </div>
                </div>
                {/* rendering book info's */}
                <div className='col-md-6'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            {props.book.author}
                        </h5>
                        <h4>
                            {props.book.title}
                        </h4>
                        <p className='card-text'>
                            {props.book.description}
                        </p>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <a className='btn btn-md main-color text-white' href='#'>
                        View Details
                    </a>
                </div>
            </div>
        </div>
    );
}