import { ReturnBookProps } from '../../types';

export const ReturnBook = (props: ReturnBookProps ) => {
    const { bookImageName, bookTitle } = props;
    return (
      <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div className="text-center">
        <img src={bookImageName} width="151" height="233" alt="book" />
        <h6 className="mt-2">{bookTitle}</h6>
          <p>Readify</p>
          <a className="btn main-color text-white" href="#">
            Reserve
          </a>
        </div>
      </div>
    );
  };
  