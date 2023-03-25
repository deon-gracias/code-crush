import axios from "axios";
import Head from "next/head";
import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../../lib/firebase";
import styles from "../../styles/Sensors.module.css";
import { onValue, ref } from "firebase/database";
export default function Sensor() {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    getSensorData();
  }, []);

  async function getSensorData() {
    // axios
    //   .get("https://agri-iot-sensor-api-production.up.railway.app/sensors")
    //   .then((res) => {
    //     console.log(res.data.data);
    //     setSensorData(res.data.data);
    //   });

    const query = ref(db, "sensor");
    return onValue(query, (snapshot) => {
      const raw_data = snapshot.val();

      if (snapshot.exists()) {
        // raw_data.forEach((key, index) => {
        //   raw_data[index].N == name ? setCrop(raw_data[index]) : console.log();
        // });
        setSensorData(raw_data);
      }
      console.log(raw_data);
    });
  }

  return (
    <>
      {console.log(sensorData)}
      <div className={styles.container}>
        <Head>
          <title>Sensor Data</title>
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Crop Sensor Data</h1>

          <button className={styles.btn} onClick={getSensorData}>
            Get Data
          </button>

          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>N</th>
                  <th>P</th>
                  <th>K</th>
                  <th>Temperature (°C)</th>
                  <th>Humidity (%)</th>
                  <th>Soil Moisture (%)</th>
                  <th>Altitude</th>
                  <th>Light</th>
                  <th>Rainfall</th>
                  <th>Wind</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {sensorData.map((sensor, rowIndex) => (
                  <tr key={rowIndex}>
                    {console.log(Object.keys(sensor))}
                    <td>{sensor.id ?? "-"}</td>
                    <td>{sensor.N ?? "-"}</td>
                    <td>{sensor.P ?? "-"}</td>
                    <td>{sensor.K ?? "-"}</td>
                    <td>{sensor.temperature ?? "-"}</td>
                    <td>{sensor.humidity ?? "-"}</td>
                    <td>{sensor.moisture ?? "-"}</td>
                    <td>{sensor.altitude ?? "-"}</td>
                    <td>{sensor.light ?? "-"}</td>
                    <td>{sensor.rain ?? "-"}</td>
                    <td>{sensor.wind_speed ? `${sensor.wind_speed}` : "-"}</td>
                    <td>
                      {sensor.createdAt
                        ? new Date(sensor.createdAt).toLocaleString()
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}
