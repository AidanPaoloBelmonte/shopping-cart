export default function NotifArea({ id = 0, value, onChange }) {
  switch (id) {
    case 1:
      return (
        <div className="shopSearch">
          <input
            type="field"
            placeholder="Search..."
            value={value}
            onChange={onChange}
          ></input>
        </div>
      );
    case 2:
      return null;
    default:
      return null;
  }
}
