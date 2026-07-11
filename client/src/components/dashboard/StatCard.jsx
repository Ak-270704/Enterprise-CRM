export default function StatCard({
  title,
  value,
  color
}) {

  return (

    <div
      style={{
        background:"#ffffff",
        padding:"20px",
        borderRadius:"12px",
        borderLeft:`6px solid ${color}`,
        boxShadow:"0 4px 12px rgba(0,0,0,.08)"
      }}
    >

      <h4>{title}</h4>

      <h2
        style={{
          marginTop:"10px"
        }}
      >
        {value}
      </h2>

    </div>

  );

}