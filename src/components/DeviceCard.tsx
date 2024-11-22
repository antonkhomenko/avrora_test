

export default function DeviceCard({value, title}: {value: number, title: string}) {
  return (
    <div className="card">
      <h5 className="card-title">{value}</h5>
      <p className="card-text">{title}</p>
    </div>
  );
}
