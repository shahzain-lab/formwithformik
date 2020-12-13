import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
///Formik
import {useFormik} from 'formik';
//yup
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
      width: "60%",
      marginLeft: "15%"
    },
  }),
);

export default function Payment({submit}:any) {
  const classes = useStyles();


  const form= useFormik({
    initialValues:{
      account: "",
      accountnumber:"",
      description:""
    },
    validationSchema:Yup.object({
      account: Yup.string().max(18,"maximum 18 letter").min(6,"minimum 6 letter").required('Required'),
                   accountnumber: Yup.string().max(18,"maximum 18 letter").min(6,"minimum 6 letter").required('Required'),
                   description: Yup.string().max(200,"maximum 200 letter").min(15,"minimum 15 letter").required('Required')
    }),
    onSubmit:val => {
      submit(2)
      console.log(val)
    }
  })
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
             
                  <form onSubmit={form.handleSubmit} autoComplete="off">
                      <TextField {...form.getFieldProps("account")} type="text" label="Account Name" />
                      {form.touched.account && form.errors.account ? (
                            <span style={{color: "red", fontWeight:"bold"}}>{form.errors.account}</span>
                          ) : null}
                          <hr />

                      <TextField {...form.getFieldProps("accountnumber")} type="number" label="Account number" />
                      {form.touched.accountnumber && form.errors.accountnumber ? (
                            <span style={{color: "red", fontWeight:"bold"}}>{form.errors.accountnumber}</span>
                          ) : null}

                          <hr />                     
                          <TextField
                             label="Description...."
                             variant="outlined"
                             color="secondary"
                             {...form.getFieldProps('description')}
                           />
                          {form.touched.description && form.errors.description ? (
                            <span style={{color: "red", fontWeight:"bold"}}>{form.errors.description}</span>
                          ) : null}

                          <hr />
                      <Button onClick={() => submit(0)} variant="contained" color="primary">
                         Back
                       </Button>
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
