import React, { useEffect, useState } from 'react';
import styles from './CountryPicker.module.css'
import { NativeSelect, FormControl } from '@material-ui/core'
import { countries } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setFetchedCountries(await countries());
        };
        fetchCountries();
    }, [])
    console.log(fetchedCountries)
    return (
        <FormControl>
            <NativeSelect defaulValue={''} onChange={(e) => handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;