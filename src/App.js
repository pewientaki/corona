import React from 'react';
import { Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import image from './images/corona-banner.jpg'

class App extends React.Component {

    state = {
        data: {},
        country: ''
    };
    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const fetchCountryData = await fetchData(country);
        this.setState({ data: fetchCountryData, country: country });

    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} alt='COVID-19' src={image}></img>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
            </div>
        )
    }
}





export default App;