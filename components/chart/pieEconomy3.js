import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'
import Sheetapi from '../../config/api'
import { useMediaQuery } from 'react-responsive';


const PieEconomy3 = () => {
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1281 })
  const isMobile = useMediaQuery({ maxWidth: 1280 })
  const isSmallScreen = useMediaQuery({ maxWidth: 576 })

  const [options, setOptions] = useState({
    title: { text: "การออมของประชากรผู้สูงอายุ" },
    dataLabels: { enabled: false },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " คน"
        }
      }
    },
    legend: {
      position: 'bottom'
    },
    responsive: [{
      breakpoint: 992,
      options: {
        legend: {
          offsetY: 20,
          itemMargin: {
            horizontal: 1,
            vertical: 1
          },
        },
      },
    }],
    labels: ["มีการออม", "ไม่มีการออม"],
    colors: ['#00d084', '#eb144c'],
  })

  const [series, setSeries] = useState([50, 50])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    let userOauth = await JSON.parse(localStorage.getItem("myOauth"))
    await namelist(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!R52:R53')
    await listData(userOauth.data.access_token, 'ข้อมูลการวิเคราะห์ทางสถิติ!S52:S53')
  }

  const namelist = async (token, value) => {
    try {
      var list = await Sheetapi.getSheet(token, value)

      setOptions({
        labels: _.flatten(list)
      })
    } catch (err) {
      console.log(err);
    }
  }

  const listData = async (token, value) => {
    try {

      var result = await Sheetapi.getSheet(token, value)
      var data = _.flatten(result).map(Number)
      setSeries(data)
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <React.Fragment>
      {
        isBigScreen ?
          <Chart
            options={options}
            series={series}
            type="donut"
            width="400"
            height="200"
          />
          :
          isMobile ?
            <Chart
              options={options}
              series={series}
              type="donut"
              width="300"
              height="200"
            />
            :
            isSmallScreen ?
              <Chart
                options={options}
                series={series}
                type="donut"
                width="200"
                height="100"
              />
              :
              null
      }
    </React.Fragment>
  )
}
export default PieEconomy3;
