import axios from "axios";
import Head from "next/head";
import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../../lib/firebase";
import styles from "../../styles/Sensors.module.css";
import { onValue, ref } from "firebase/database";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { BarChart, LineChart } from "../../components/LineChart";

Chart.register(CategoryScale);
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

    const query = ref(db, "AgiIoT");
    return onValue(query, (snapshot) => {
      const raw_data = snapshot.val();
      let allService = raw_data.map((item, indx) => indx);
      if (snapshot.exists()) {
        // raw_data.forEach((key, index) => {
        //   raw_data[index].N == name ? setCrop(raw_data[index]) : console.log();
        // });
        var k = [];
        var l = [];
        var n = [];

        setChartData({
          labels: allService,
          datasets: [
            {
              label: "N",
              data: raw_data.map((item, index) => {
                return raw_data[index]["N"];
              }),

              borderColor: "rgb(255, 13, 32)",
              backgroundColor: "rgb(255, 13, 32)",
              borderWidth: 2,
            },
            {
              label: "K",
              data: raw_data.map((item, index) => {
                return raw_data[index]["K"];
              }),

              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              borderWidth: 2,
            },
            {
              label: "P",
              data: raw_data.map((item, index) => {
                return raw_data[index]["P"];
              }),
              borderColor: "rgb(255, 99, 12)",
              backgroundColor: "rgb(255, 99, 12)",
              borderWidth: 2,
            },
          ],
        });

        raw_data.forEach((item, index) => {
          axios
            .post(`${process.env.api}/recommend`, {
              N: item.N,
              P: item.P,
              K: item.K,
              temperature: item.temperature,
              humidity: item.humidity,
              ph: item.ph,
              rainfall: 1000,
            })
            .then((res) => {
              console.log(raw_data[index]);
              if (res.data.error) {
                console.log("Error : ", res.data.error);
                return;
              }
              const recommended = res.data.recommended[0];
              console.log(recommended);
              raw_data[index]["recommendation"] = recommended;
            });
        });

        console.log(raw_data);
        setSensorData(raw_data);
      }
      // console.log(
      //   raw_data.map((item, index) => {
      //     return raw_data[index]["K"];
      //   })
      // );
    });
  }

  const [chartData, setChartData] = React.useState({
    labels: [],
    datasets: [],
  });
  return (
    <>
      {console.log(sensorData)}
      <LineChart chartData={chartData} />
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
                  <th>Recommendation</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {sensorData.map((sensor, rowIndex) => (
                  <tr key={rowIndex}>
                    {/* {console.log(Object.keys(sensor))} */}
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
                    <td>{sensor.recommendation}</td>
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
