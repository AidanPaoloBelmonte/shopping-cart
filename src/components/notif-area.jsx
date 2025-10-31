export default function NotifArea({ id = 0, onChange }) {
  switch (id) {
    case 1:
      return (
        <div className="shopSearch">
          <input type="field" placeholder="Search..."></input>
        </div>
      );
    case 2:
      return null;
    default:
      return null;
  }
}
