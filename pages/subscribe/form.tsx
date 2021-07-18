import { Formik, Form, Field } from "formik";
import { object, string } from 'yup';
import { Container, Button, Grid, Typography } from "@material-ui/core";

import TextField from '../../components/form/TextField';


interface SubscribeForm {
  cardNumber: string;
  date: string;
  cvc: string;
  name: string;
  email: string
}

const cardNumberField = 'cardNumber';
const dateField = 'date';
const cvcField = 'cvc';
const nameField = 'name';
const emailField = 'email';

const initialValues: SubscribeForm = {
  [cardNumberField]: '',
  [dateField]: '',
  [cvcField]: '',
  [nameField]: '',
  [emailField]: ''
}

const schema = object({
  [cardNumberField]: string().max(16).required(),
  [dateField]: string().required(),
  [cvcField]: string().required(),
  [nameField]: string().required(),
  [emailField]: string().email().required()
})

export default function SubscribeForm() {
  return (
    <Container>
      <Typography variant="h1">
        Add credit or debit card
      </Typography>

      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={console.log}>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                name={cardNumberField}
                component={TextField}
                fullWidth
                variant="outlined"
                size="small"
                label="Card number"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name={dateField}
                component={TextField}
                fullWidth
                variant="outlined"
                size="small"
                label="MM/YY"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name={cvcField}
                component={TextField}
                fullWidth
                variant="outlined"
                size="small"
                type="password"
                label="CVC" />
            </Grid>
            <Grid item xs={12}>
              <Field
                name={nameField}
                component={TextField}
                fullWidth
                variant="outlined"
                size="small"
                label="Name on card" />
            </Grid>
            <Grid item xs={12}>
              <Field
                name={emailField}
                component={TextField}
                fullWidth
                variant="outlined"
                size="small"
                label="E-mail"
              />
            </Grid>
          </Grid>

          <div>
            <Typography variant="body2" gutterBottom color="textSecondary" align="center">
              By continuing, you agree to the Google Payments Terms of Service. The Privacy Notice describes how your data is handled.
            </Typography>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </Container>
  )
}