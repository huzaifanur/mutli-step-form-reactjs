import "./navigation.scss";
export default function Navigation({ handleNext, step, handleBack }) {
  return (
    <>
      {step < 5 && (
        <div className="footer">
          {step > 1 ? (
            <button onClick={handleBack} className="btn | btn-prev">
              Go Back
            </button>
          ) : (
            <div></div>
          )}
          <button onClick={handleNext} className="btn | btn-next">
            Next Step
          </button>
        </div>
      )}
    </>
  );
}
