import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
////formik
import {useFormik} from 'formik';
import * as Yup from 'yup'; 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      marginLeft:"10%",
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius: "2rem",
      ['@media(min-width: 780px)'] : {
        width: '60%',
        marginLeft: "20%"
      }
    },
    svg:{
      position: 'absolute',
      width: '25rem',
      ['@media(max-width: 768px)']: {
        visibility:'hidden'
      }
    }
  }),
);

export default function Signup({submit}:any) {
  const classes = useStyles();
const form =useFormik({ 
            initialValues:{
              firstName: "",
              lastName: '',
              email: "",
              password: ""
            },
            validationSchema: Yup.object({
              firstName: Yup.string().max(16, "Less than 16 letter").min(3,"More than 3 letter").required("Required"),
              lastName: Yup.string().max(16, "Less than 16 letter").min(3,"More than 3 letter").required("Required"),
              email:Yup.string().email("Invalid email address").required("Required"),
              password: Yup.string().required("Required")

            }),
            onSubmit:values => {
              submit(1)
              console.log(values)
            }
            })
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={11}>
          <Paper className={classes.paper}>
            {/* ///SVG// */}
            <svg className={classes.svg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M41.1,-63C56.2,-54.4,73.1,-47.8,75.5,-36.3C77.8,-24.9,65.5,-8.6,57.9,4.7C50.3,18,47.4,28.3,40.6,33.8C33.7,39.4,22.9,40.1,13.1,41.6C3.4,43,-5.3,45.2,-17.3,47.1C-29.4,49,-44.8,50.6,-53,44.2C-61.2,37.8,-62.1,23.4,-58.9,11.6C-55.7,-0.2,-48.4,-9.5,-46.5,-24.5C-44.7,-39.4,-48.3,-60.1,-41.4,-72.4C-34.6,-84.8,-17.3,-88.8,-2.1,-85.5C13.1,-82.2,26.1,-71.6,41.1,-63Z" transform="translate(100 100)" />
</svg>

              <form onSubmit={form.handleSubmit} autoComplete="off">
                
               <TextField {...form.getFieldProps('firstName')} type="text" label="First Name" />
               {form.touched.firstName && form.errors.firstName ? (
         <span style={{color: "red", fontWeight:"bold"}}>{form.errors.firstName}</span>
       ) : null}
        
        <hr />
                
                <TextField type="text" {...form.getFieldProps('lastName')} label="Last Name" />
                {form.touched.lastName && form.errors.lastName ? (
         <span style={{color: "red", fontWeight:"bold"}}>{form.errors.lastName}</span>
       ) : null}
        
        <hr />
                
              
                <TextField {...form.getFieldProps('email')} type="email" label="Email Address" />
                {form.touched.email && form.errors.email ? (
         <span style={{color: "red", fontWeight:"bold"}}>{form.errors.email}</span>
       ) : null}
        
        <hr />
  
                <TextField {...form.getFieldProps('password')} type="password" label="Password" />
                {form.touched.password && form.errors.password ? (
         <span style={{color: "red", fontWeight:"bold"}}>{form.errors.password}</span>
       ) : null}
        
                <br /><hr /><br />
                <Button type="submit" variant="contained" color="secondary">
                         Submit
                       </Button>
              </form>
            
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
