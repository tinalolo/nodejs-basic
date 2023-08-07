import fetch from "node-fetch";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function main() {
  try {
    const year = 110;
    const apiUrl = `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP048/${year}`;
    const data = await fetchData(apiUrl);
    const records = data.responseData;
    const getKaohsiungDistricts =records
    .filter((record) => record.site_id.includes("高雄市"));
    
    // 1. 輸出高雄市全部行政區
    const kaohsiungDistricts = getKaohsiungDistricts
      .map((record) => record.site_id.split("高雄市")[1]);
    console.log(kaohsiungDistricts);
    
    // 2. 輸出高雄市 110 年的總人口數量
    // const totalPopulation = records.people_total.reduce((total, record) => total + parseInt(record.people_total), 0);
    const totalPopulation = getKaohsiungDistricts
      .map((record) => record.people_total)
      .reduce((total, record) => total + parseInt(record), 0);
    console.log(`高雄市 110 年總人口數量：${totalPopulation}`);
    
    // 3. 輸出高雄市 110 年人口密度最高的三個區
    const sortedByDensity = getKaohsiungDistricts.sort((a, b) => b.population_density - a.population_density);
    const topThreeDensity = sortedByDensity.slice(0, 3).map((record) => ({
      site_id: record.site_id,
      population_density: record.population_density,
    }));
    console.log("高雄市 110 年人口密度最高的三個區：", topThreeDensity);
    
    // 4. 輸出 110 年人口增加最多的三個縣市
    const year109DataUrl = `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP048/${year - 1}`;
    const year109Data = await fetchData(year109DataUrl);
    const year109Records = year109Data.responseData;
    const increaseByCity = {};

    records.forEach((record) => {
      const year109Record = year109Records.find((r) => r.site_id === record.site_id);
      if (year109Record) {
        const increase = parseInt(record.people_total) - parseInt(year109Record.people_total);
        increaseByCity[record.site_id] = increase;
      }
    });

    const sortedIncrease = Object.entries(increaseByCity).sort((a, b) => b[1] - a[1]);
    const topThreeIncreases = sortedIncrease.slice(0, 3).map((entry) => ({
      city: entry[0],
      increase: entry[1],
    }));
    console.log("110 年人口增加最多的三個縣市：", topThreeIncreases);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();



