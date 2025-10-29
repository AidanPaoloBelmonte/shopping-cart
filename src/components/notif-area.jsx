export default function getNotifArea(id = 0) {
  switch (id) {
    case 1:
      return null;
    case 2:
      return null;
    default:
      return (
        <div className="notifArea notifHome centerAligned">
          <div className="notifHomeContainer">
            <h3 className="centerAligned">
              Everything from Everywhere at your fingertips.
            </h3>
          </div>
        </div>
      );
  }
}
