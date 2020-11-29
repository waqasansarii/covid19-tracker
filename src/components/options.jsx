import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    marginTop:40
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    
  },
}));


 const  fetchData= async()=>{
  let api = await fetch('https://api.covid19api.com/summary')
  let res = await api.json()
  return res
}

 function Options(props) {
  const classes = useStyles();

  const [country , setCountry] = useState([])
  

  useEffect(()=>{
       async function countries(){
        let API =await fetchData()
       let arr =[]
       arr.push(API.Global)
        API.Global.Country='Global'
        var newArray = arr.concat(API.Countries);

      setCountry(newArray)
    }
    countries()
  },[])

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <NativeSelect
          onChange={props.func}
          inputProps={{
            name: 'country',
            id: 'age-native-helper',
          }}
        >
          {
            country.map((value,index)=>{
              return(
              <option key={index}  value={value.Country}>{value.Country}</option>
                )
            })
          }
        </NativeSelect>
      </FormControl>
      </div>
      )
      }
      export{
        Options,
        fetchData
      } ;