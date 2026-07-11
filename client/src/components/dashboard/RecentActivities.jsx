import { useEffect, useState } from "react";
import API from "../../services/api";

export default function RecentActivities() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {

    const fetchActivities = async () => {

      try {

        const res = await API.get("/activities");

        console.log("Activities Response:", res.data);

        setActivities(
          res.data.activities ||
          res.data.data ||
          []
        );

      } catch (err) {

        console.error(err);

        setActivities([]);

      }

    };

    fetchActivities();

  }, []);

  return (

    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >

      <h3>Recent Activities</h3>

      <ul>

        {activities?.length === 0 ? (

          <li>No activities available</li>

        ) : (

          activities?.map((activity) => (

            <li
              key={activity._id}
              style={{
                padding: "10px 0",
              }}
            >
              {activity.title || activity.description || "Activity"}
            </li>

          ))

        )}

      </ul>

    </div>

  );

}