import { Formik, Form, Field } from 'formik';
import { useMutation } from 'react-query';
import axios from 'axios';
import { object, string } from 'yup';
import {
  Container,
  Button,
  Grid,
  Typography,
  makeStyles,
  Theme
} from '@material-ui/core';

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
  cardNumber: string;
  date: string;
  cvc: string;
  name: string;
  email: string;
}

const cardNumberField = 'cardNumber';
const dateField = 'date';
const cvcField = 'cvc';
const nameField = 'name';
const emailField = 'email';

const initialValues: SubscribeForm = {
  [cardNumberField]: '4111111111111111',
  [dateField]: '12/22',
  [cvcField]: '123',
  [nameField]: 'TEST TEST',
  [emailField]: 'test@gmail.com'
};

const schema = object({
  [cardNumberField]: string().max(16).required(),
  [dateField]: string().required(),
  [cvcField]: string().required(),
  [nameField]: string().required(),
  [emailField]: string().email().required()
});

export default function SubscribeForm() {
  const classes = useStyles();
  const { mutateAsync: createInvoice } = useMutation(() =>
    axios.post('/api/invoice/create')
  );

  const handleSubmit = async (values: SubscribeForm) => {
    const { data: sessionId } = await createInvoice();
  };

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
        <Form className={classes.form}>
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
              By continuing, you agree to the Google Payments Terms of Service.
              The Privacy Notice describes how your data is handled.
            </Typography>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </Container>
  );
}
