import { Formik, Form, Field } from 'formik';
import { useMutation, useQuery } from 'react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { object, string } from 'yup';
import {
  Container,
  Button,
  Grid,
  Typography,
  makeStyles,
  Theme
} from '@material-ui/core';

import { CreateInvoiceResponse } from '../api/invoice/create';

import TextField from '../../components/form/TextField';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    padding: theme.spacing(4, 2),
    height: '95vh'
  },
  form: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: `calc(100% - ${theme.spacing(6)}px)`,
    marginTop: theme.spacing(6)
  },
  footer: {
    marginTop: 'auto'
  }
}));
interface SubscribeForm {
  card_number: string;
  date: string;
  cvv: string;
  card_holder: string;
  email: string;
}

const cardNumberField = 'card_number';
const dateField = 'date';
const cvvField = 'cvv';
const nameField = 'card_holder';
const emailField = 'email';

const initialValues: SubscribeForm = {
  [cardNumberField]: '4111111111111111',
  [dateField]: '12/22',
  [cvvField]: '123',
  [nameField]: 'TEST TEST',
  [emailField]: 'test@gmail.com'
};

const schema = object({
  [cardNumberField]: string().max(16).required(),
  [dateField]: string().required(),
  [cvvField]: string().required(),
  [nameField]: string().required(),
  [emailField]: string().email().required()
});

export default function SubscribeForm() {
  const classes = useStyles();

  const { data } = useQuery<
    unknown,
    AxiosError,
    AxiosResponse<CreateInvoiceResponse>
  >('createInvoice', () => axios.post('/api/invoice/create'), {
    onSuccess: console.log,
    onError: console.log
  });
  // const { mutateAsync: createInvoice } = useMutation(() =>
  //   axios.post('/api/invoice/create'), {
  //     onSuccess: ({sessionId, formToken, payformUrl}) =>
  //   }
  // );

  const handleSubmit = async (values: SubscribeForm) => {};

  return (
    <Container className={classes.root}>
      <Typography variant="h3" align="center">
        Add credit or debit card
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <form
            className={classes.form}
            action={data?.data.payformUrl}
            method="POST"
          >
            <input
              type="hidden"
              name="session_id"
              value={data?.data.sessionId}
            />
            <input
              type="hidden"
              name="form_token"
              value={data?.data.formToken}
            />
            <input
              type="hidden"
              name="expiry_month"
              value={values.date.split('/')[0]}
            />
            <input
              type="hidden"
              name="expiry_year"
              value={values.date.split('/')[1]}
            />
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
                  name={cvvField}
                  component={TextField}
                  fullWidth
                  variant="outlined"
                  size="small"
                  type="password"
                  label="CVC"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name={nameField}
                  component={TextField}
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="Name on card"
                />
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

            <div className={classes.footer}>
              <Typography
                variant="body2"
                gutterBottom
                color="textSecondary"
                align="center"
              >
                By continuing, you agree to the Google Payments Terms of
                Service. The Privacy Notice describes how your data is handled.
              </Typography>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Container>
  );
}
