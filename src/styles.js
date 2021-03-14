import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    marginTop: '5px',
    marginBottom: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(155,241,207,255)'
  },
  heading: {
    color: 'rgba(0,13,255, 1)',
    fontFamily: 'Chilanka'
  },
  image: {
    marginLeft: '15px',
  },
  
}));
