import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19'

export const fetchData = async (country) => {
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    } else {
        changeableUrl = `${url}/all`
    }
      try {
        const { data: { updated, cases, todayCases, deaths, todayDeaths, recovered, todayRecovered } } = await axios.get(`${changeableUrl}`);
        return { updated, cases, todayCases, deaths, todayDeaths, recovered, todayRecovered };
    }
    catch (error) {
        console.log(error)
    }
};

const getAsList = (keys, data) => {
    const objectPropertiesList = keys.map(key => {
        return {
            date: key,
            cases: data.cases[key],
            deaths: data.deaths[key],
            recovered: data.recovered[key]
        };
    });
    console.log(objectPropertiesList)
    return objectPropertiesList;
}

export const fetchDailySummary = async () => {
    const { data } = await axios.get(`${url}/historical/all`)

    return getAsList(Object.keys(data.cases), data);
}

export const countries = async () => {
    try {
        const response = await axios.get(`${url}/countries`)
        const countriesList = (response.data).map((item) => item.country)

        return countriesList;

    } catch (error) {
        console.log(error)
    }
};




