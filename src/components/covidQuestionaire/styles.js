import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },

paper: {
    padding: theme.spacing(1),
    marginTop: '5px',
    width: '100%'
  },

  buttonSubmit: {
    marginBottom: 10,
    marginTop: '7px'
  },

}));