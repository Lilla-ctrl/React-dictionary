import "../style/Pictures.css";

export default function Pictures(props) {
  if (props.pictures) {
    return (
      <>
        <section>
          <div className="row">
            {props.pictures.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="_blank">
                    <img src={photo.src.portrait} className="img-fluid" />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  } else {
    return null;
  }
}
