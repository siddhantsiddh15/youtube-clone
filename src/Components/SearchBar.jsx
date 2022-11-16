import {useState} from 'react';
import { Paper, TextField } from '@mui/material';

export default function SearchBar(props){

    const {onSubmit} = props;

    const [searchTerm, setSearchTerm] = useState('');
 
    function handleSearchChange(e){
        setSearchTerm(e.target.value)
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            onSubmit(searchTerm);
            
        }
    }
    return (<>
    <Paper elevation ={6} styling ={{padding:"25px", m:4}}>
        <TextField
            fullWidth
            label ="Search"
            value ={searchTerm}
            onChange = {handleSearchChange}
            onKeyPress = {handleKeyPress}
        />    
    </Paper>
    </>)
}