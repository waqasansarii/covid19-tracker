import React, { useEffect, useState } from 'react';
import Header from './components/header'
import Info_grid from './components/information'
import BarChart from './components/chart'
import LastUpdate from './components/lastUpdate'
import { Options, fetchData } from './components/options'
import CountryName from './components/country'
import BasicTable from './components/table'
import './App.css'


const totalCases = async () => {
  let api = await fetch('https://api.covid19api.com/world/total')
  let json = await api.json()
  return json;
}


function App() {

  const [data, manageData] = useState([])

  useEffect(() => {
    async function getTotal() {

      let total = await totalCases()
      let date = await fetchData()
      let getDate = date.Date
      total.Date = getDate
      manageData(total)

    }
    getTotal()
  }, [])

  const handleChange = async (e) => {
    let getChangeValue = e.target.value
    let countryName = await fetchData()
    countryName.Global.Country = 'Global'
    countryName.Global.Date = countryName.Date
    var newArray = countryName.Countries.concat(countryName.Global);
    let filter = newArray.filter(a => a.Country === getChangeValue)
    manageData(filter[0])
  }



  return (
    <div>
      <Header />

      <Options func={handleChange} />
      <CountryName data={data} />
      <Info_grid total={data} />
      <LastUpdate date={data} />

        <BarChart data={data} />
        <BasicTable />
    </div>
  )
}

export default App;


