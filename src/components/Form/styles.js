import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '5px'
  },
  paper1: {
    padding: theme.spacing(2),
    backgroundColor: 'rgb(136, 149, 168)',
    position: 'right'
  },
  subT: {
    padding: theme.spacing(1),
    marginTop: '10px'

  },
  h4: {
    fontFamily: 'Chilanka',
    marginBottom: '-3px',
    marginTop: '-3px'
  },

  opened: {
    marginTop: '-7px',
    marginBottom: '-5px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: '7px'
  },
}));
