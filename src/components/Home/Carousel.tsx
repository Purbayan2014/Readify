import {
    newbook1,
    newbook2,
    readify,
    coding,
    masteringtypescript,
    protypescript,
    pytorch1,
    pytorch2,
    pytorch3,
    tensorflow,
    tensorflow2,
    typescript,
} from '../../Images';
import { ReturnBook } from './ReturnBook';

export const Carousel = () => {
    return (
        <div className='container mt-5' style={{ height: 550 }}>
            <div className='homepage-carousel-title'>
                <h3>Find your next "I stayed up too late reading" book.</h3>
            </div>
            <div id='carouselExampleControls' className='carousel carousel-dark slide mt-5 
                d-none d-lg-block' data-bs-interval='false'>

                {/* Desktop */}
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <ReturnBook bookImageName={newbook1} bookTitle="Advanced C# Techniques"/>
                            <ReturnBook bookImageName={coding} bookTitle="Coding for Kids"/>
                            <ReturnBook bookImageName={newbook2} bookTitle="The Expert Guide to Machine Learning"/>
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                        <ReturnBook bookImageName={masteringtypescript} bookTitle="Mastering Typescript"/>
                        <ReturnBook bookImageName={pytorch1} bookTitle="Applied Deep Learning with Pytorch"/>
                        <ReturnBook bookImageName={pytorch2} bookTitle="Mastering Pytorch"/>

                        </div>
                    </div>
                    
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                        <ReturnBook bookImageName={pytorch3} bookTitle="Deep Learning for Coders with Fast AI and Pytorch"/>
                        <ReturnBook bookImageName={tensorflow} bookTitle="Tensorflow Machine Learning CookBook"/>
                        <ReturnBook bookImageName={tensorflow2} bookTitle="Learning Tensorflow.js"/>
                        </div>
                    </div>
                    
                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                        <ReturnBook bookImageName={protypescript} bookTitle="Pro Typescript"/>
                        <ReturnBook bookImageName={typescript} bookTitle="Effective Typescript"/>
                        <ReturnBook bookImageName={readify} bookTitle="Crash Course in Python"/>
                        </div>
                    </div>
                    <button className='carousel-control-prev' type='button'
                        data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next' type='button'
                        data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </div>

            {/* Mobile */}
            <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                        <img
                            src={readify}
                            width='151'
                            height='233'
                            alt="book"
                        />
                        <h6 className='mt-2'>Crash Course in Python</h6>
                        <p>Readify</p>
                        <a className='btn main-color text-white' href='#'>Reserve</a>
                    </div>
                </div>
            </div>
            <div className='homepage-carousel-title mt-3'>
                <a className='btn btn-outline-secondary btn-lg' href='#'>View More</a>
            </div>
        </div>
    );
}