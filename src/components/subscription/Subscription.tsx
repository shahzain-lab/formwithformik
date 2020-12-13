import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: "50%",
      marginLeft:"30%"
    },
  }),
);

export default function Subscription({submit}:any) {
  const classes = useStyles();

   const form = useFormik({
     initialValues:{
      email: "",
     },
     validationSchema:Yup.object({
      email: Yup.string().email("Invalid email address").required("Required")
     }),
     onSubmit:val => {
       console.log(val)
     }
   })
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>           
                <h3 className="text-secondary">Never miss our new designs</h3>
                <p>Send your Email Address and recieve our awesome updates</p> 
                  
                  <form onSubmit={form.handleSubmit} autoComplete="off">
                      <TextField type="email" {...form.getFieldProps('email')} label="Email Address" />
  {form.touched.email && form.errors.email ? <span style={{color: "red", fontWeight:"bold"}}>{form.errors.email}</span> :null}
                      <br />
                      <hr />
                      <Button onClick={() => submit(1)} type="submit" variant="contained" color="secondary">
                         Back
                       </Button>
                  </form>

          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
