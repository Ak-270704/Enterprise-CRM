export default function RecentActivities({

  activities,

}) {

  return (

    <div
      style={{
        background:"#fff",
        padding:"20px",
        borderRadius:"12px",
        boxShadow:"0 2px 10px rgba(0,0,0,.08)"
      }}
    >

      <h3>

        Recent Activities

      </h3>

      {

        activities.map(activity=>(

          <div

            key={activity._id}

            style={{

              borderBottom:"1px solid #eee",

              padding:"12px 0"

            }}

          >

            <b>

              {activity.title}

            </b>

            <br/>

            {activity.activityType}

            <br/>

            Assigned To :

            {

              activity.assignedTo?.name ||

              "-"

            }

          </div>

        ))

      }

    </div>

  );

}